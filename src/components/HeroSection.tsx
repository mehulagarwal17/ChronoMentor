
import { Button } from '@/components/ui/button';
import { Hand, Sparkles, Gem } from 'lucide-react';

interface HeroSectionProps {
  onUploadClick: () => void;
}

const HeroSection = ({ onUploadClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-orb cosmic-orb-1"></div>
        <div className="cosmic-orb cosmic-orb-2"></div>
        <div className="cosmic-orb cosmic-orb-3"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Mystical badge */}
        <div className="mb-8 animate-fade-in-up">
          <div className="mystical-border rounded-full p-1 inline-block">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-full px-6 py-3">
              <span className="text-neon-gold text-sm font-medium tracking-wider uppercase flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-sparkle" />
                ✨ Ancient Wisdom Meets AI ✨
              </span>
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="mystical-title text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up-2">
          <span className="text-neon-purple animate-neon-flicker">Chrono</span>
          <span className="text-neon-pink">Mentor</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-300/90 mb-4 font-light italic animate-fade-in-up-3">
          Discover alternate versions of your life through palmistry
        </p>

        {/* Prophecy */}
        <div className="mb-12 animate-fade-in-up-4">
          <p className="text-purple-200/80 text-lg font-light italic border-l-2 border-neon-gold pl-6 max-w-2xl mx-auto">
            "The version of you that might have been... is still listening."
          </p>
        </div>

        {/* Floating crystal ball */}
        <div className="mb-12 flex justify-center animate-fade-in-up-5">
          <div className="relative">
            <Gem className="w-24 h-24 text-neon-purple animate-float neon-glow" />
            <div className="absolute inset-0 animate-pulse-glow">
              <Gem className="w-24 h-24 text-neon-pink opacity-50" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up-5">
          <Button
            onClick={onUploadClick}
            size="lg"
            className="mystical-button bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-full neon-glow-pink transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            <Hand className="w-6 h-6 mr-3" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
