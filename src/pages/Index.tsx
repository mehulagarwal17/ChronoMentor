import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
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
  const [landingStarted, setLandingStarted] = useState(false);

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

  const handleStartJourney = () => {
    setLandingStarted(true);
    // Set session variable
    sessionStorage.setItem('landing_started', 'true');
    // Scroll to palm upload section
    setTimeout(() => {
      document.getElementById('palm-upload')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
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

  useEffect(() => {
    // Check if user has already started their journey
    const hasStarted = sessionStorage.getItem('landing_started');
    if (hasStarted) {
      setLandingStarted(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen mystic-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-xl font-light drop-shadow-lg">Connecting to the cosmic realm...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen mystic-gradient flex items-center justify-center p-4 relative overflow-hidden">
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

  return (
    <div className="min-h-screen bg-background">
      <div className="mystic-gradient min-h-screen">
        {/* User Menu */}
        <div className="absolute top-4 right-4 z-20">
          <Button
            onClick={signOut}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Sign Out
          </Button>
        </div>

        {/* Landing section with fade transition */}
        <div className={`transition-all duration-1000 ${landingStarted ? 'opacity-0 -translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <HeroSection onUploadClick={handleStartJourney} />
        </div>
        
        {/* Main app content */}
        <div className={`transition-all duration-1000 ${landingStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
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
        </div>

        {/* Mystical footer only for authenticated users in main app */}
        {landingStarted && (
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
        )}
      </div>
    </div>
  );
};

export default Index;