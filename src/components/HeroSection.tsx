
import { Button } from '@/components/ui/button';
import { Hand, Sparkles, Gem } from 'lucide-react';

interface HeroSectionProps {
  onUploadClick: () => void;
}

const HeroSection = ({ onUploadClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-orb cosmic-orb-1"></div>
        <div className="cosmic-orb cosmic-orb-2"></div>
        <div className="cosmic-orb cosmic-orb-3"></div>
        <div className="cosmic-orb cosmic-orb-4"></div>
        <div className="cosmic-orb cosmic-orb-5"></div>
        
        {/* Mystical particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-gold rounded-full opacity-60 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Mystical badge with enhanced styling */}
        <div className="mb-8 animate-fade-in-up">
          <div className="mystical-border rounded-full p-1 inline-block backdrop-blur-sm">
            <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 rounded-full px-8 py-4 shadow-2xl">
              <span className="text-neon-gold text-sm font-medium tracking-widest uppercase flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-sparkle" />
                ✨ Ancient Wisdom Meets AI ✨
                <Sparkles className="w-4 h-4 ml-2 animate-sparkle" />
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced main title with text effects */}
        <h1 className="mystical-title text-7xl md:text-9xl font-bold mb-8 animate-fade-in-up-2 relative">
          <span className="text-neon-purple animate-neon-flicker drop-shadow-2xl">Chrono</span>
          <span className="text-neon-pink drop-shadow-2xl">Mentor</span>
          <div className="absolute inset-0 mystical-title text-7xl md:text-9xl font-bold opacity-30 blur-sm">
            <span className="text-neon-purple">Chrono</span>
            <span className="text-neon-pink">Mentor</span>
          </div>
        </h1>

        {/* Enhanced subtitle */}
        <p className="text-2xl md:text-3xl text-purple-200/90 mb-6 font-light italic animate-fade-in-up-3 leading-relaxed">
          Discover alternate versions of your life through palmistry
        </p>

        {/* Mystical tagline */}
        <p className="text-lg md:text-xl text-neon-gold/80 mb-8 font-light animate-fade-in-up-3 tracking-wide">
          Where destiny meets possibility in the palm of your hand
        </p>

        {/* Enhanced prophecy with better styling */}
        <div className="mb-12 animate-fade-in-up-4">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -left-4 top-0 text-6xl text-neon-gold/30 font-serif">"</div>
            <p className="text-purple-200/90 text-xl font-light italic border-l-4 border-neon-gold pl-8 py-4 bg-purple-900/20 backdrop-blur-sm rounded-r-lg shadow-xl">
              The version of you that might have been... is still listening.
            </p>
            <div className="absolute -right-4 bottom-0 text-6xl text-neon-gold/30 font-serif rotate-180">"</div>
          </div>
        </div>

        {/* Enhanced floating crystal ball with multiple effects */}
        <div className="mb-12 flex justify-center animate-fade-in-up-5">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <Gem className="w-32 h-32 text-neon-purple animate-float neon-glow relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 animate-pulse-glow">
              <Gem className="w-32 h-32 text-neon-pink opacity-50" />
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-40 h-40 border-2 border-neon-gold/30 rounded-full border-dashed"></div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button with better effects */}
        <div className="animate-fade-in-up-5 space-y-6">
          <Button
            onClick={onUploadClick}
            size="lg"
            className="mystical-button bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white px-16 py-8 text-2xl font-bold rounded-full neon-glow-pink transition-all duration-300 hover:scale-105 uppercase tracking-widest shadow-2xl backdrop-blur-sm border border-neon-pink/30"
          >
            <Hand className="w-8 h-8 mr-4 animate-pulse" />
            Begin Your Mystical Journey
          </Button>
          
          <p className="text-purple-300/70 text-sm tracking-wide">
            Upload your palm image and unlock the secrets of your alternate timelines
          </p>
        </div>

        {/* Mystical features preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up-6">
          <div className="mystical-card bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-neon-purple/50 transition-all duration-300">
            <Sparkles className="w-8 h-8 text-neon-gold mx-auto mb-4" />
            <h3 className="text-neon-purple font-semibold mb-2">Palm Analysis</h3>
            <p className="text-purple-200/80 text-sm">Ancient palmistry meets AI precision</p>
          </div>
          <div className="mystical-card bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-neon-pink/50 transition-all duration-300">
            <Gem className="w-8 h-8 text-neon-pink mx-auto mb-4" />
            <h3 className="text-neon-pink font-semibold mb-2">Timeline Exploration</h3>
            <p className="text-purple-200/80 text-sm">Discover your parallel life paths</p>
          </div>
          <div className="mystical-card bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-neon-blue/50 transition-all duration-300">
            <Hand className="w-8 h-8 text-neon-blue mx-auto mb-4" />
            <h3 className="text-neon-blue font-semibold mb-2">Cosmic Insights</h3>
            <p className="text-purple-200/80 text-sm">Personalized mystical revelations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
