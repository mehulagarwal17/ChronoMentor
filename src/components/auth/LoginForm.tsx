
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Welcome back to your mystical journey!');
    }
    
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-cinzel text-glow text-white mb-2">Welcome Back</h2>
        <p className="text-mystic-pink/80 font-unbounded">Continue your journey into alternate lives</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-white font-unbounded">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-mystic-pink/30 text-white placeholder:text-white/50 font-unbounded focus:border-mystic-pink focus:ring-mystic-pink"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-white font-unbounded">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-mystic-pink/30 text-white placeholder:text-white/50 font-unbounded focus:border-mystic-pink focus:ring-mystic-pink"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full cosmic-button text-white font-unbounded font-semibold py-3 text-lg"
        >
          {loading ? 'Entering the Mystical Realm...' : 'Sign In'}
        </Button>
      </form>

      <p className="text-center text-white/70 font-unbounded">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-mystic-pink hover:text-mystic-pink/80 font-medium transition-colors"
        >
          Start your mystical journey
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
