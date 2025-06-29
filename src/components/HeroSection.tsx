
import { Button } from '@/components/ui/button';
import { Hand, Sparkles, Eye, Crystal } from 'lucide-react';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden stars-bg">
      {/* Mystical floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-mystic-pink/10 animate-pulse-mystical"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-astral-blue/10 animate-float-gentle"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-ethereal-glow animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-mystic-pink/20 animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-astral-blue/15 animate-float-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold font-cinzel text-glow mb-6 animate-pulse-mystical">
            ChronoMentor
          </h1>
          <h2 className="text-2xl md:text-4xl font-unbounded font-light text-purple-200 mb-4 italic text-glow-white">
            Palmistry Edition
          </h2>
          
          {/* Mystical prophecy */}
          <p className="text-lg md:text-xl text-mystic-pink/90 mb-8 font-unbounded font-light italic text-glow">
            "The version of you that might have been… is still listening."
          </p>
        </div>
        
        {/* Mystical centerpiece with floating crystal ball */}
        <div className="mb-12 flex justify-center relative">
          <div className="relative">
            {/* Crystal ball */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mystical-gradient flex items-center justify-center animate-float-gentle glow-mystical relative overflow-hidden">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <Crystal className="w-16 h-16 md:w-20 md:h-20 text-white/90 animate-pulse-mystical" />
            </div>
            
            {/* Floating mystical elements around crystal ball */}
            <div className="absolute -top-4 -right-4 animate-twinkle">
              <Sparkles className="w-8 h-8 text-mystic-pink animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-float-gentle" style={{ animationDelay: '1s' }}>
              <Eye className="w-6 h-6 text-astral-blue" />
            </div>
            <div className="absolute top-1/2 -right-8 animate-twinkle" style={{ animationDelay: '2s' }}>
              <Sparkles className="w-4 h-4 text-white/80" />
            </div>
            <div className="absolute top-1/4 -left-6 animate-pulse-mystical" style={{ animationDelay: '1.5s' }}>
              <Hand className="w-5 h-5 text-mystic-pink/70" />
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-purple-200/80 mb-12 max-w-2xl mx-auto leading-relaxed font-unbounded font-light">
          Discover the hidden paths of your destiny through ancient palmistry. 
          Speak with alternate versions of yourself and explore the lives you could have lived.
        </p>
        
        {/* Mystical CTA Button */}
        <div className="relative">
          <Button 
            onClick={onUploadClick}
            size="lg"
            className="cosmic-button text-white px-12 py-6 text-xl font-unbounded font-semibold rounded-full border-2 border-mystic-pink/30 shadow-2xl uppercase tracking-widest relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-mystic-pink/20 to-astral-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Hand className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">Start Your Journey</span>
          </Button>
        </div>
        
        {/* Floating mystical sparkles */}
        <div className="absolute top-1/4 right-12 text-mystic-pink/40 animate-twinkle" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute bottom-1/4 left-12 text-astral-blue/40 animate-float-gentle" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-white/30 animate-twinkle" style={{ animationDelay: '2.5s' }}>
          <Sparkles className="w-3 h-3" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
