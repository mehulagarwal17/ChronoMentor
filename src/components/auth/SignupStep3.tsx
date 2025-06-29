
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignupData } from './SignupForm';
import { Upload, X } from 'lucide-react';

interface SignupStep3Props {
  formData: SignupData;
  updateFormData: (data: Partial<SignupData>) => void;
  onPrev: () => void;
  onSubmit: () => void;
  loading: boolean;
}

const SignupStep3: React.FC<SignupStep3Props> = ({
  formData,
  updateFormData,
  onPrev,
  onSubmit,
  loading
}) => {
  const [passionInput, setPassionInput] = useState('');

  const addPassion = () => {
    if (passionInput.trim() && !formData.passion_dream_field.includes(passionInput.trim())) {
      updateFormData({
        passion_dream_field: [...formData.passion_dream_field, passionInput.trim()]
      });
      setPassionInput('');
    }
  };

  const removePassion = (passion: string) => {
    updateFormData({
      passion_dream_field: formData.passion_dream_field.filter(p => p !== passion)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="passion_dream_field" className="text-white">Passion / Dream Fields</Label>
        <div className="flex space-x-2">
          <Input
            id="passion_dream_field"
            type="text"
            value={passionInput}
            onChange={(e) => setPassionInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPassion())}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="e.g., Music, Startups, Psychology"
          />
          <Button
            type="button"
            onClick={addPassion}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Add
          </Button>
        </div>
        {formData.passion_dream_field.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.passion_dream_field.map((passion, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {passion}
                <button
                  type="button"
                  onClick={() => removePassion(passion)}
                  className="ml-2 hover:text-white"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="missed_opportunity" className="text-white">One Missed Opportunity or Regret</Label>
        <textarea
          id="missed_opportunity"
          value={formData.missed_opportunity}
          onChange={(e) => updateFormData({ missed_opportunity: e.target.value })}
          className="w-full h-20 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Something you wish you'd tried or done differently..."
        />
      </div>

      <div>
        <Label className="text-white">Palm Image (Optional)</Label>
        <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors">
          <Upload className="w-8 h-8 text-white/50 mx-auto mb-2" />
          <p className="text-white/70 text-sm">
            Upload your palm image now or later to unlock deeper insights
          </p>
          <p className="text-white/50 text-xs mt-1">JPG, PNG up to 10MB</p>
        </div>
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
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          {loading ? 'Creating Account...' : 'Start My Chrono Journey'}
        </Button>
      </div>
    </form>
  );
};

export default SignupStep3;
