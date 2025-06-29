import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PalmUploadSection from '../components/PalmUploadSection';
import PalmInsightReport from '../components/PalmInsightReport';
import VoiceChatInterface from '../components/VoiceChatInterface';
import TimelineSwitcher from '../components/TimelineSwitcher';
import SaveReflectSection from '../components/SaveReflectSection';

const Index = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [palmUploaded, setPalmUploaded] = useState(false);
  const [palmAnalysis, setPalmAnalysis] = useState(null);
  const [selectedTimeline, setSelectedTimeline] = useState('Creative Me');
  const [chatHistory, setChatHistory] = useState([]);
  const [savedInsights, setSavedInsights] = useState([]);

  const handlePalmUpload = (file) => {
    console.log('Palm uploaded:', file);
    setPalmUploaded(true);
    
    // Mock palm analysis
    const mockAnalysis = {
      heart_line: {
        trait: "Emotionally Deep",
        description: "You feel emotions intensely and form deep connections with others."
      },
      head_line: {
        trait: "Intuitive Thinker", 
        description: "You make decisions quickly based on gut feelings and creative insights."
      },
      life_line: {
        trait: "High Vitality",
        description: "You have strong life energy but should watch for burnout from overcommitment."
      },
      fate_line: {
        trait: "Creative Path",
        description: "Your career journey is unconventional but deeply fulfilling and authentic."
      }
    };
    
    setPalmAnalysis(mockAnalysis);
  };

  const handleChatMessage = (message, response) => {
    const newMessage = {
      id: Date.now(),
      user: message,
      ai: response,
      timeline: selectedTimeline,
      timestamp: new Date()
    };
    setChatHistory(prev => [...prev, newMessage]);
  };

  const handleSaveInsight = (insight) => {
    setSavedInsights(prev => [...prev, {
      id: Date.now(),
      content: insight,
      timestamp: new Date(),
      timeline: selectedTimeline
    }]);
  };

  const scrollToPalmUpload = () => {
    document.getElementById('palm-upload')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-xl font-light drop-shadow-lg">Connecting to the cosmic realm...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        <div className="text-center max-w-2xl relative z-10">
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-float">🔮</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl mb-4">
              <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-blue-200 bg-clip-text text-transparent animate-shimmer">
                ChronoMentor
              </span>
            </h1>
            <p className="text-white/90 text-lg mb-8 font-light italic drop-shadow-lg">
              Discover alternate versions of your life through ancient palmistry
            </p>
          </div>
          
          <Button
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full mystical-glow transition-all duration-500 hover:scale-110 particle-burst shadow-2xl"
          >
            <span className="flex items-center">
              ✨ Begin Your Mystical Journey
            </span>
          </Button>
          
          <div className="mt-8 text-white/70 text-sm drop-shadow-md">
            <p>Join thousands who've discovered their alternate selves</p>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated user experience - show main app content immediately
  return (
    <div className="min-h-screen bg-background">
      <div className="mystic-gradient min-h-screen">
        {/* Responsive User Menu */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
          <Button
            onClick={signOut}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-xs md:text-sm px-3 md:px-4 py-1 md:py-2"
          >
            Sign Out
          </Button>
        </div>

        {/* Welcome section for authenticated users */}
        <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Welcome back to ChronoMentor
            </h1>
            <p className="text-purple-200 text-lg md:text-xl mb-8">
              Continue exploring your alternate life paths
            </p>
            
            {/* Mystical Down Arrow */}
            <div className="flex justify-center">
              <button
                onClick={scrollToPalmUpload}
                className="group flex flex-col items-center space-y-2 text-purple-300/80 hover:text-purple-200 transition-all duration-300 cursor-pointer"
                aria-label="Scroll to palm upload section"
              >
                <div className="relative">
                  {/* Glowing orb behind arrow */}
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  
                  {/* Main arrow with mystical styling */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-400/30 flex items-center justify-center group-hover:border-purple-300/50 transition-all duration-300 backdrop-blur-sm">
                    <ChevronDown className="w-6 h-6 text-purple-300 group-hover:text-purple-200 animate-bounce" />
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Subtle text hint */}
                <span className="text-xs font-light opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  Begin your journey
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main app content */}
        <div id="palm-upload">
          <PalmUploadSection onPalmUpload={handlePalmUpload} />
        </div>
        
        {palmUploaded && palmAnalysis && (
          <>
            <PalmInsightReport analysis={palmAnalysis} />
            
            <TimelineSwitcher 
              selectedTimeline={selectedTimeline}
              onTimelineSelect={setSelectedTimeline}
            />
            
            <VoiceChatInterface 
              selectedTimeline={selectedTimeline}
              onMessage={handleChatMessage}
              palmAnalysis={palmAnalysis}
            />
            
            <SaveReflectSection 
              chatHistory={chatHistory}
              savedInsights={savedInsights}
              onSaveInsight={handleSaveInsight}
            />
          </>
        )}

        {/* Footer */}
        <footer className="mt-20 p-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-white/70 text-sm mb-4">
              <p className="italic">"The future belongs to those who believe in the beauty of their dreams."</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors">About</a>
              <a href="#" className="hover:text-white/80 transition-colors">Source</a>
              <a href="#" className="hover:text-white/80 transition-colors">Connect with the Oracle</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;