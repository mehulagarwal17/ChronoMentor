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
        
        {/* Floating mystical elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/10 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-violet-500/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-indigo-500/15 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="text-center max-w-4xl relative z-10">
          {/* Mystical header with third eye */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="relative mr-4">
                <div className="text-4xl animate-pulse-glow">👁️</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white drop-shadow-2xl">
                <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-blue-200 bg-clip-text text-transparent animate-shimmer">
                  ChronoMentor
                </span>
              </h1>
              <div className="text-4xl ml-4 animate-float">🔮</div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-light text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              <span className="italic font-serif text-purple-200">
                "Peer into your palm. Hear your future self. Journey through alternate lifelines."
              </span>
            </h2>
          </div>
          
          {/* Mystical features carousel */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">✋</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Upload Palm</h3>
                <p className="text-white/80 text-sm">Scan your fate lines and heart lines</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔊</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Talk to Voice Oracle</h3>
                <p className="text-white/80 text-sm">Real-time conversation with your alternate self</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌌</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Discover Alternate Lifelines</h3>
                <p className="text-white/80 text-sm">Explore what could've been</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button
              onClick={() => navigate('/auth')}
              size="lg"
              className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full mystical-glow transition-all duration-500 hover:scale-110 group overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <span className="text-2xl mr-3 animate-spin" style={{ animationDuration: '3s' }}>✨</span>
                Begin Your Mystical Journey
                <div className="ml-3 text-2xl animate-float">🔮</div>
              </div>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 text-white/70 text-sm drop-shadow-md animate-fade-in" style={{ animationDelay: '2s' }}>
            <p className="font-light">Join thousands who've discovered their alternate selves</p>
          </div>
          
          {/* Floating mystical elements around text */}
          <div className="absolute top-1/4 right-8 text-purple-200/60 animate-float" style={{ animationDelay: '2s' }}>
            <span className="text-2xl drop-shadow-lg">⭐</span>
          </div>
          <div className="absolute bottom-1/4 left-8 text-blue-200/60 animate-float" style={{ animationDelay: '3s' }}>
            <span className="text-3xl drop-shadow-lg">✨</span>
          </div>
          <div className="absolute top-1/3 left-1/4 text-violet-200/50 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-2 h-2 bg-current rounded-full drop-shadow-lg"></div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;