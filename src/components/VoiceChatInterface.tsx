import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, MicOff, Send, User, Bot, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { initializeOmnidimensionWidget } from '@/utils/omnidimensionWidget';

const VoiceChatInterface = ({ selectedTimeline, onMessage, palmAnalysis }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateAIResponse = (userMessage, timeline, palmData) => {
    // Mock AI responses based on timeline and palm analysis
    const responses = {
      'Creative Me': [
        "As your creative self, I see that your intuitive thinking style would have led you to pursue art full-time. That emotional depth in your heart line? It would fuel incredibly moving pieces.",
        "Your creative path was always meant to be unconventional. I followed my artistic vision despite the instability, and it brought deep fulfillment that traditional careers never could.",
        "With your high vitality, I threw myself completely into creative projects. Sometimes to the point of burnout, but that intensity created my most meaningful work."
      ],
      'Startup Me': [
        "Your fast, intuitive decision-making would have been perfect for the startup world. I learned to trust those gut feelings and they led to breakthrough innovations.",
        "That creative, unstable career path in your fate line? In my timeline, I channeled that into building disruptive companies that changed industries.",
        "Your emotional depth became my superpower in understanding user needs. I built products that truly connected with people's hearts, not just their minds."
      ],
      'Spiritual Me': [
        "I see your palm shows deep emotional capacity - in my path, I used that sensitivity to connect with higher consciousness and help others find their purpose.",
        "Your intuitive thinking style led me to meditation and spiritual practices. Logic alone never felt complete; I needed that deeper knowing.",
        "The high vitality in your life line? I learned to channel it through spiritual disciplines. Burnout became breakthrough when I found balance."
      ]
    };

    const timelineResponses = responses[timeline] || responses['Creative Me'];
    return timelineResponses[Math.floor(Math.random() * timelineResponses.length)];
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setTextInput('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(message, selectedTimeline, palmAnalysis);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        timeline: selectedTimeline
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      onMessage(message, aiResponse);
      setTimeout(scrollToBottom, 100);
    }, 1500);

    setTimeout(scrollToBottom, 100);
  };

  const handleVoiceToggle = async () => {
    if (!isListening) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsListening(true);
        
        // Mock voice recognition - in real app would use Web Speech API
        setTimeout(() => {
          setIsListening(false);
          const mockTranscript = "What would my life be like if I had taken more creative risks?";
          setTextInput(mockTranscript);
          toast({
            title: "Voice recorded",
            description: "Message transcribed successfully",
          });
        }, 3000);
        
        stream.getTracks().forEach(track => track.stop());
      } catch (error) {
        toast({
          title: "Microphone access denied",
          description: "Please allow microphone access for voice input",
          variant: "destructive",
        });
      }
    } else {
      setIsListening(false);
    }
  };

  const handleTalkToAlternateSelf = () => {
    const userData = {
      user_id: user?.id || "user_001",
      user_name: user?.user_metadata?.full_name || "Mehul Agarwal",
      palm_heart_line_trait: palmAnalysis?.heart_line?.trait || "Curved and deep — intense emotional sensitivity",
      user_regret: "Not learning guitar", // This could be from user profile
      user_passion: "Helping others find clarity", // This could be from user profile
      timeline_title: selectedTimeline || "The Artist You"
    };

    initializeOmnidimensionWidget(userData);
    
    toast({
      title: "Connecting to your alternate self...",
      description: "The chat widget will appear shortly",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-200 mb-4">
            Speak with {selectedTimeline}
          </h2>
          <p className="text-purple-300/80 text-lg mb-6">
            Ask questions about your alternate life path
          </p>
          
          {/* Talk to Alternate Self Button */}
          <Button
            onClick={handleTalkToAlternateSelf}
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full glow-gold transition-all duration-300 hover:scale-105 mb-8"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Talk to My Alternate Self
          </Button>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20">
          <CardContent className="p-6">
            {/* Chat Messages */}
            <ScrollArea className="h-96 mb-6">
              <div className="space-y-4 pr-4">
                {messages.length === 0 && (
                  <div className="text-center py-12">
                    <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-300/60">
                      Start a conversation with your alternate self...
                    </p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`p-4 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-purple-600 text-white ml-4'
                            : 'bg-purple-900/30 text-purple-200 mr-4 glow'
                        }`}
                      >
                        <p className="leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-60 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <div className={`${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-purple-900/30 text-purple-200 p-4 rounded-2xl mr-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* Input Area */}
            <div className="flex gap-3">
              <Button
                onClick={handleVoiceToggle}
                variant="outline"
                size="lg"
                className={`${
                  isListening 
                    ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse-glow' 
                    : 'border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              
              <div className="flex-1 flex gap-2">
                <Input
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Ask about your alternate life..."
                  className="bg-purple-900/20 border-purple-500/30 text-purple-200 placeholder:text-purple-400/60"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(textInput)}
                />
                <Button
                  onClick={() => handleSendMessage(textInput)}
                  disabled={!textInput.trim() || isLoading}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VoiceChatInterface;
