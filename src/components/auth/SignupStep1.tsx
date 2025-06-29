
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignupData } from './SignupForm';

interface SignupStep1Props {
  formData: SignupData;
  updateFormData: (data: Partial<SignupData>) => void;
  onNext: () => void;
  onSwitchToLogin: () => void;
}

const SignupStep1: React.FC<SignupStep1Props> = ({
  formData,
  updateFormData,
  onNext,
  onSwitchToLogin
}) => {
  const isValid = formData.email && formData.password && formData.full_name;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="full_name" className="text-white">Full Name *</Label>
        <Input
          id="full_name"
          type="text"
          value={formData.full_name}
          onChange={(e) => updateFormData({ full_name: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-white">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label htmlFor="password" className="text-white">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => updateFormData({ password: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="Create a password"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
      >
        Continue
      </Button>

      <p className="text-center text-white/70 text-sm">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-purple-300 hover:text-purple-200 font-medium"
        >
          Sign in
        </button>
      </p>
    </form>
  );
};

export default SignupStep1;
