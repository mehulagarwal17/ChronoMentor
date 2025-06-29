
-- Create user profiles table to store additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender_identity TEXT,
  location TEXT,
  current_profession TEXT NOT NULL,
  passion_dream_field TEXT[],
  missed_opportunity TEXT,
  palm_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, date_of_birth, current_profession)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE((NEW.raw_user_meta_data ->> 'date_of_birth')::date, CURRENT_DATE),
    COALESCE(NEW.raw_user_meta_data ->> 'current_profession', '')
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create storage bucket for palm images
INSERT INTO storage.buckets (id, name, public) VALUES ('palm-images', 'palm-images', true);

-- Storage policy for palm images
CREATE POLICY "Users can upload their own palm images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'palm-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own palm images"
ON storage.objects FOR SELECT
USING (bucket_id = 'palm-images' AND auth.uid()::text = (storage.foldername(name))[1]);
