
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PalmUploadSection from '../components/PalmUploadSection';
import PalmInsightReport from '../components/PalmInsightReport';
import VoiceChatInterface from '../components/VoiceChatInterface';
import TimelineSwitcher from '../components/TimelineSwitcher';
import SaveReflectSection from '../components/SaveReflectSection';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <div className="mystic-gradient min-h-screen">
        <HeroSection onUploadClick={() => document.getElementById('palm-upload').scrollIntoView({ behavior: 'smooth' })} />
        
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
