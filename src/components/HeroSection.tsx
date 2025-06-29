import { Button } from '@/components/ui/button';
import { Hand, Sparkles } from 'lucide-react';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 rounded-full bg-purple-500/10 animate-pulse-glow"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 rounded-full bg-blue-500/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-24 md:h-24 rounded-full bg-gold/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* Responsive main headline */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-3 md:mb-4 animate-fade-in leading-tight">
            Your Alternate Life…
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-purple-200 mb-6 md:mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.5s' }}>
            Written in Your Hands
          </h2>
        </div>
        
        {/* Responsive animated palm scanner centerpiece */}
        <div className="mb-8 md:mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center animate-pulse-glow glow">
              <Hand className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
              <Sparkles className="w-4 h-4 md:w-8 md:h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2">
              <Sparkles className="w-3 h-3 md:w-6 md:h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Responsive description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/80 mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '1.5s' }}>
          Discover the hidden paths of your destiny through ancient palmistry. 
          Speak with alternate versions of yourself and explore the lives you could have lived.
        </p>
        
        {/* Responsive CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <Button 
            onClick={onUploadClick}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full glow-gold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <Hand className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Upload Your Palm
          </Button>
        </div>
        
        {/* Responsive floating elements */}
        <div className="absolute top-1/4 right-4 md:right-8 text-purple-300/60 animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
        </div>
        <div className="absolute bottom-1/4 left-4 md:left-8 text-blue-300/60 animate-float hidden sm:block" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;