import { Button } from '@/components/ui/button';
import { Hand, Sparkles, Eye, Star } from 'lucide-react';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Constellation particles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/10 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-violet-500/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-indigo-500/15 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Mystical header with third eye */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Eye className="w-12 h-12 text-violet-400 animate-pulse-glow mr-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-shimmer">
              ChronoMentor
            </h1>
            <div className="text-4xl ml-4 animate-float">🔮</div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-light text-purple-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            <span className="italic">Peer into your palm. Hear your future self. Journey through alternate lifelines.</span>
          </h2>
        </div>
        
        {/* Animated palm oracle centerpiece */}
        <div className="mb-16 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 flex items-center justify-center animate-pulse-glow mystical-glow">
              <Hand className="w-20 h-20 md:w-24 md:h-24 text-white" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute -top-4 -right-4 animate-orbit">
              <Sparkles className="w-8 h-8 text-gold animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-orbit-reverse">
              <Star className="w-6 h-6 text-violet-400 animate-pulse" />
            </div>
            <div className="absolute top-1/2 -left-8 animate-orbit" style={{ animationDelay: '2s' }}>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 -right-8 animate-orbit-reverse" style={{ animationDelay: '1s' }}>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Mystical features carousel */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Upload Palm</h3>
              <p className="text-purple-300/70 text-sm">Scan your fate lines and heart lines</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <div className="text-2xl">🔊</div>
              </div>
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Talk to Voice Oracle</h3>
              <p className="text-purple-300/70 text-sm">Real-time conversation with your alternate self</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <div className="text-2xl">🌌</div>
              </div>
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Discover Alternate Lifelines</h3>
              <p className="text-purple-300/70 text-sm">Explore what could've been</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <Button 
            onClick={onUploadClick}
            size="lg"
            className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full mystical-glow transition-all duration-500 hover:scale-110 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Sparkles className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
              Start Your Journey
              <div className="ml-3 text-2xl animate-float">✨</div>
            </div>
          </Button>
        </div>
        
        {/* Floating mystical elements */}
        <div className="absolute top-1/4 right-8 text-purple-300/40 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/4 left-8 text-blue-300/40 animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-violet-300/30 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-2 h-2 bg-current rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;