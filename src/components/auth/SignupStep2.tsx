
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignupData } from './SignupForm';

interface SignupStep2Props {
  formData: SignupData;
  updateFormData: (data: Partial<SignupData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const SignupStep2: React.FC<SignupStep2Props> = ({
  formData,
  updateFormData,
  onNext,
  onPrev
}) => {
  const isValid = formData.date_of_birth && formData.current_profession;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="date_of_birth" className="text-white">Date of Birth *</Label>
        <Input
          id="date_of_birth"
          type="date"
          value={formData.date_of_birth}
          onChange={(e) => updateFormData({ date_of_birth: e.target.value })}
          className="bg-white/10 border-white/20 text-white"
          required
        />
        <p className="text-xs text-purple-300 mt-1">Used to anchor predictions to your life stage</p>
      </div>

      <div>
        <Label htmlFor="gender_identity" className="text-white">Gender Identity</Label>
        <select
          id="gender_identity"
          value={formData.gender_identity}
          onChange={(e) => updateFormData({ gender_identity: e.target.value })}
          className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="" className="bg-gray-800">Select (optional)</option>
          <option value="male" className="bg-gray-800">Male</option>
          <option value="female" className="bg-gray-800">Female</option>
          <option value="non-binary" className="bg-gray-800">Non-binary</option>
          <option value="prefer-not-to-say" className="bg-gray-800">Prefer not to say</option>
        </select>
      </div>

      <div>
        <Label htmlFor="location" className="text-white">Location / City</Label>
        <Input
          id="location"
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="e.g., New York, London"
        />
      </div>

      <div>
        <Label htmlFor="current_profession" className="text-white">Current Profession *</Label>
        <Input
          id="current_profession"
          type="text"
          value={formData.current_profession}
          onChange={(e) => updateFormData({ current_profession: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="e.g., Student, Developer, Teacher"
          required
        />
      </div>

      <div className="flex space-x-3">
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          Back
        </Button>
        <Button
          type="submit"
          disabled={!isValid}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default SignupStep2;
