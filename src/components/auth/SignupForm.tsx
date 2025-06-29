
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';
import SignupStep3 from './SignupStep3';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

export interface SignupData {
  email: string;
  password: string;
  full_name: string;
  date_of_birth: string;
  gender_identity: string;
  location: string;
  current_profession: string;
  passion_dream_field: string[];
  missed_opportunity: string;
  palm_image?: File;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  
  const [formData, setFormData] = useState<SignupData>({
    email: '',
    password: '',
    full_name: '',
    date_of_birth: '',
    gender_identity: '',
    location: '',
    current_profession: '',
    passion_dream_field: [],
    missed_opportunity: '',
  });

  const updateFormData = (data: Partial<SignupData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const { error } = await signUp(formData.email, formData.password, {
        full_name: formData.full_name,
        date_of_birth: formData.date_of_birth,
        gender_identity: formData.gender_identity,
        location: formData.location,
        current_profession: formData.current_profession,
        passion_dream_field: formData.passion_dream_field,
        missed_opportunity: formData.missed_opportunity,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Welcome to ChronoMentor! Please check your email to verify your account.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    }

    setLoading(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignupStep1
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
      case 2:
        return (
          <SignupStep2
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <SignupStep3
            formData={formData}
            updateFormData={updateFormData}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
            loading={loading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Start Your Journey</h2>
        <p className="text-purple-200 text-sm">
          Let's get to know you better — so your alternate lives feel real and personal
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center space-x-2 mb-6">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-3 h-3 rounded-full transition-colors ${
              step <= currentStep
                ? 'bg-purple-400'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {renderStep()}
    </div>
  );
};

export default SignupForm;
