
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Heart, Brain, Zap, Star, ChevronDown, Sparkles } from 'lucide-react';

const PalmInsightReport = ({ analysis }) => {
  const [openCards, setOpenCards] = useState({
    heart_line: false,
    head_line: false,
    life_line: false,
    fate_line: false
  });

  const toggleCard = (cardId) => {
    setOpenCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const lineData = [
    {
      id: 'heart_line',
      title: 'Heart Line',
      subtitle: 'Emotional Patterns',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30',
      glowClass: 'neon-glow',
      data: analysis.heart_line
    },
    {
      id: 'head_line',
      title: 'Head Line',
      subtitle: 'Thinking Style',
      icon: Brain,
      color: 'text-neon-blue',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      glowClass: 'neon-glow-blue',
      data: analysis.head_line
    },
    {
      id: 'life_line',
      title: 'Life Line',
      subtitle: 'Vitality & Choices',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      glowClass: 'neon-glow',
      data: analysis.life_line
    },
    {
      id: 'fate_line',
      title: 'Fate Line',
      subtitle: 'Career Journey',
      icon: Star,
      color: 'text-neon-purple',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      glowClass: 'neon-glow',
      data: analysis.fate_line
    }
  ];

  return (
    <section className="py-20 px-4 mystic-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="mystical-border rounded-full p-1 inline-block mb-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-full px-4 py-2">
                <span className="text-neon-gold text-xs font-medium tracking-wider uppercase">
                  ✨ Ancient Revelations ✨
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="mystical-title text-5xl md:text-6xl font-bold text-neon-purple mb-6 animate-neon-flicker">
            Palm Insights
          </h2>
          <p className="text-purple-300/80 text-xl font-light italic">
            Discover the secrets written in your hands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lineData.map((line, index) => {
            const Icon = line.icon;
            const isOpen = openCards[line.id];
            
            return (
              <Collapsible key={line.id} open={isOpen} onOpenChange={() => toggleCard(line.id)}>
                <Card className={`mystical-card ${line.bgColor} ${line.borderColor} border-2 backdrop-blur-sm transition-all duration-500 hover:${line.glowClass} ${isOpen ? line.glowClass : ''} relative overflow-hidden`}>
                  {/* Background shimmer effect when open */}
                  {isOpen && (
                    <div className="absolute inset-0 animate-shimmer opacity-20"></div>
                  )}
                  
                  <CollapsibleTrigger className="w-full relative z-10">
                    <CardHeader className="text-left p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full ${line.bgColor} ${line.borderColor} border-2 ${isOpen ? line.glowClass : ''} transition-all duration-300`}>
                            <Icon className={`w-7 h-7 ${line.color} ${isOpen ? 'animate-pulse-glow' : ''}`} />
                          </div>
                          <div>
                            <CardTitle className={`mystical-title text-2xl ${isOpen ? line.color : 'text-purple-200'} transition-colors duration-300`}>
                              {line.title}
                            </CardTitle>
                            <CardDescription className="text-purple-300/70 font-light text-base">
                              {line.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ChevronDown 
                            className={`w-6 h-6 text-purple-400 transition-all duration-300 ${
                              isOpen ? 'rotate-180 text-neon-purple' : ''
                            }`} 
                          />
                          <Sparkles className={`w-4 h-4 ${line.color} opacity-60 animate-sparkle`} />
                        </div>
                      </div>
                      
                      {/* Preview trait when collapsed */}
                      {!isOpen && (
                        <div className="mt-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${line.bgColor} ${line.color} border ${line.borderColor} backdrop-blur-sm`}>
                            {line.data.trait}
                          </span>
                        </div>
                      )}
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-8 px-8 relative z-10">
                      <div className="space-y-6">
                        <div>
                          <h4 className="mystical-title text-lg font-semibold text-purple-200 mb-3">Primary Trait</h4>
                          <span className={`inline-block px-6 py-3 rounded-full text-base font-medium ${line.bgColor} ${line.color} border-2 ${line.borderColor} ${line.glowClass} backdrop-blur-sm animate-pulse-glow`}>
                            ✨ {line.data.trait}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="mystical-title text-lg font-semibold text-purple-200 mb-3">Mystical Insight</h4>
                          <p className="text-purple-300/90 leading-relaxed text-base font-light bg-black/20 rounded-lg p-4 border border-purple-500/20">
                            {line.data.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                  
                  {/* Mystical corner decorations */}
                  <div className="absolute top-3 right-3 opacity-40">
                    <div className="w-1 h-1 bg-neon-purple rounded-full animate-sparkle"></div>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-40" style={{ animationDelay: '1s' }}>
                    <div className="w-1 h-1 bg-neon-pink rounded-full animate-sparkle"></div>
                  </div>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PalmInsightReport;
