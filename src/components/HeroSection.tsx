
import { Button } from '@/components/ui/button';
import { Hand, Sparkles, ChevronDown, Eye, Star, Zap } from 'lucide-react';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden mystic-gradient">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-orb cosmic-orb-1"></div>
        <div className="cosmic-orb cosmic-orb-2"></div>
        <div className="cosmic-orb cosmic-orb-3"></div>
        
        {/* Floating mystical symbols */}
        <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
          <Eye className="w-8 h-8 text-neon-purple animate-neon-flicker" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
          <Star className="w-6 h-6 text-neon-pink animate-neon-flicker" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-float opacity-30" style={{ animationDelay: '4s' }}>
          <Zap className="w-10 h-10 text-neon-blue animate-neon-flicker" />
        </div>
        
        {/* Drifting cosmic particles */}
        <div className="absolute top-20 animate-cosmic-drift opacity-20">
          <div className="w-2 h-2 bg-neon-purple rounded-full neon-glow"></div>
        </div>
        <div className="absolute top-40 animate-cosmic-drift opacity-20" style={{ animationDelay: '5s' }}>
          <div className="w-1 h-1 bg-neon-pink rounded-full neon-glow-pink"></div>
        </div>
        <div className="absolute top-60 animate-cosmic-drift opacity-20" style={{ animationDelay: '10s' }}>
          <div className="w-3 h-3 bg-neon-blue rounded-full neon-glow-blue"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        {/* Mystical header with enhanced typography */}
        <div className="mb-12 opacity-0 animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="mystical-border rounded-full p-1 mb-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-full px-6 py-2">
                <span className="text-neon-gold text-sm font-medium tracking-wider uppercase">
                  ✨ Ancient Wisdom Awaits ✨
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="mystical-title text-6xl md:text-8xl font-black text-neon-purple mb-6 animate-neon-flicker">
            ChronoMentor
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-neon-pink mb-4 italic opacity-0 animate-fade-in-up-1">
            Your Alternate Life…
          </h2>
          
          <h3 className="text-xl md:text-3xl font-medium text-neon-blue opacity-0 animate-fade-in-up-2">
            Written in Your Hands
          </h3>
          
          {/* Mystical prophecy quote */}
          <div className="mt-8 opacity-0 animate-fade-in-up-3">
            <p className="text-lg text-purple-200 italic font-light tracking-wide">
              "The version of you that might have been… is still listening."
            </p>
          </div>
        </div>
        
        {/* Enhanced palm scanner centerpiece */}
        <div className="mb-16 flex justify-center opacity-0 animate-fade-in-up-4">
          <div className="relative">
            {/* Outer mystical circle */}
            <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full mystical-border animate-pulse-glow opacity-60"></div>
            
            {/* Main palm scanner */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full cosmic-gradient flex items-center justify-center neon-glow animate-pulse-glow">
              <Hand className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-lg" />
            </div>
            
            {/* Floating sparkles around the palm */}
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-neon-gold animate-sparkle" />
            </div>
            <div className="absolute -bottom-4 -left-4">
              <Sparkles className="w-6 h-6 text-neon-pink animate-sparkle" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-1/2 -left-8">
              <Sparkles className="w-5 h-5 text-neon-blue animate-sparkle" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute top-1/2 -right-8">
              <Sparkles className="w-7 h-7 text-neon-purple animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
        
        {/* Enhanced description */}
        <div className="mb-12 opacity-0 animate-fade-in-up-5">
          <p className="text-lg md:text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the hidden paths of your destiny through ancient palmistry. 
            <span className="text-neon-pink font-medium"> Speak with alternate versions of yourself</span> and explore the lives you could have lived.
          </p>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="mb-12 opacity-0 animate-fade-in-up-5">
          <Button 
            onClick={onUploadClick}
            size="lg"
            className="mystical-button bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white px-12 py-6 text-xl font-bold rounded-full neon-glow-pink transition-all duration-500 hover:scale-110 hover:neon-glow-gold transform shadow-2xl"
          >
            <Hand className="w-6 h-6 mr-3" />
            Start Your Journey
          </Button>
          
          <p className="mt-4 text-sm text-purple-300/70 italic">
            Upload your palm • Discover your paths • Speak to alternate selves
          </p>
        </div>

        {/* Continue exploring section */}
        <div className="opacity-0 animate-fade-in-up-5" style={{ animationDelay: '0.5s' }}>
          <p className="text-purple-300/70 text-sm mb-4 font-medium tracking-wide">
            ↓ Continue exploring your alternative life paths ↓
          </p>
          <div className="flex justify-center">
            <ChevronDown className="w-8 h-8 text-neon-purple animate-bounce neon-glow" />
          </div>
        </div>
      </div>
      
      {/* Enhanced floating mystical elements */}
      <div className="absolute top-1/3 right-12 text-neon-purple animate-float opacity-40" style={{ animationDelay: '3s' }}>
        <Sparkles className="w-5 h-5 animate-sparkle" />
      </div>
      <div className="absolute bottom-1/3 left-12 text-neon-blue animate-float opacity-40" style={{ animationDelay: '6s' }}>
        <Sparkles className="w-7 h-7 animate-sparkle" />
      </div>
      <div className="absolute top-1/2 left-8 text-neon-pink animate-float opacity-30" style={{ animationDelay: '4s' }}>
        <Star className="w-4 h-4 animate-neon-flicker" />
      </div>
      <div className="absolute bottom-1/4 right-16 text-neon-gold animate-float opacity-30" style={{ animationDelay: '7s' }}>
        <Eye className="w-6 h-6 animate-neon-flicker" />
      </div>
    </section>
  );
};

export default HeroSection;
