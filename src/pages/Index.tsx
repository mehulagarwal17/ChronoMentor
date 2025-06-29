
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4">ChronoMentor</h1>
          <p className="text-purple-200 mb-8">Discover alternate versions of your life through palmistry</p>
          <Button
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mystic-gradient min-h-screen">
        {/* User Menu */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={signOut}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Sign Out
          </Button>
        </div>

        <HeroSection onUploadClick={() => document.getElementById('palm-upload')?.scrollIntoView({ behavior: 'smooth' })} />
        
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
    </div>
  );
};

export default Index;
