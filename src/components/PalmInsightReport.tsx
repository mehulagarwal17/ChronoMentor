
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Heart, Brain, Zap, Star, ChevronDown } from 'lucide-react';

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
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      data: analysis.heart_line
    },
    {
      id: 'head_line',
      title: 'Head Line',
      subtitle: 'Thinking Style',
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      data: analysis.head_line
    },
    {
      id: 'life_line',
      title: 'Life Line',
      subtitle: 'Vitality & Choices',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      data: analysis.life_line
    },
    {
      id: 'fate_line',
      title: 'Fate Line',
      subtitle: 'Career Journey',
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      data: analysis.fate_line
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-200 mb-4">
            Your Palm Insights
          </h2>
          <p className="text-purple-300/80 text-lg">
            Discover the secrets written in your hands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lineData.map((line) => {
            const Icon = line.icon;
            const isOpen = openCards[line.id];
            
            return (
              <Collapsible key={line.id} open={isOpen} onOpenChange={() => toggleCard(line.id)}>
                <Card className={`${line.bgColor} ${line.borderColor} border backdrop-blur-sm transition-all duration-300 hover:glow`}>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${line.bgColor} ${line.borderColor} border`}>
                            <Icon className={`w-5 h-5 ${line.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-purple-200">{line.title}</CardTitle>
                            <CardDescription className="text-purple-300/60">
                              {line.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-purple-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      
                      {/* Preview trait when collapsed */}
                      {!isOpen && (
                        <div className="mt-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${line.bgColor} ${line.color} border ${line.borderColor}`}>
                            {line.data.trait}
                          </span>
                        </div>
                      )}
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-purple-200 mb-2">Primary Trait</h4>
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${line.bgColor} ${line.color} border ${line.borderColor} glow`}>
                            {line.data.trait}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-purple-200 mb-2">Insight</h4>
                          <p className="text-purple-300/80 leading-relaxed">
                            {line.data.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
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
