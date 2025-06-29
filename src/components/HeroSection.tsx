
import { Button } from '@/components/ui/button';
import { Hand, Sparkles } from 'lucide-react';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/10 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gold/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-4 animate-fade-in">
            Your Alternate Life…
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-purple-200 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Written in Your Hands
          </h2>
        </div>
        
        {/* Animated palm scanner centerpiece */}
        <div className="mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center animate-pulse-glow glow">
              <Hand className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1.5s' }}>
          Discover the hidden paths of your destiny through ancient palmistry. 
          Speak with alternate versions of yourself and explore the lives you could have lived.
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <Button 
            onClick={onUploadClick}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full glow-gold transition-all duration-300 hover:scale-105"
          >
            <Hand className="w-5 h-5 mr-2" />
            Upload Your Palm
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-8 text-purple-300/60 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute bottom-1/4 left-8 text-blue-300/60 animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
