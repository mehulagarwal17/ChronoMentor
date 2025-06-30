
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Brain, Zap, Star, Sparkles } from 'lucide-react';

interface PalmAnalysis {
  heart_line: {
    trait: string;
    description: string;
  };
  head_line: {
    trait: string;
    description: string;
  };
  life_line: {
    trait: string;
    description: string;
  };
  fate_line: {
    trait: string;
    description: string;
  };
}

interface PalmInsightReportProps {
  analysis: PalmAnalysis;
}

const PalmInsightReport = ({ analysis }: PalmInsightReportProps) => {
  const insights = [
    {
      key: 'heart_line',
      title: 'Heart Line',
      icon: Heart,
      color: 'text-neon-pink',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      glowClass: 'neon-glow-pink'
    },
    {
      key: 'head_line',
      title: 'Head Line',
      icon: Brain,
      color: 'text-neon-blue',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      glowClass: 'neon-glow-blue'
    },
    {
      key: 'life_line',
      title: 'Life Line',
      icon: Zap,
      color: 'text-neon-gold',
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-500/30',
      glowClass: 'neon-glow-gold'
    },
    {
      key: 'fate_line',
      title: 'Fate Line',
      icon: Star,
      color: 'text-neon-purple',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      glowClass: 'neon-glow'
    }
  ];

  return (
    <section id="insights" className="py-20 px-4 mystic-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="mystical-border rounded-full p-1 inline-block mb-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-full px-4 py-2">
                <span className="text-neon-gold text-xs font-medium tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  ✨ Your Palm Reveals ✨
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="mystical-title text-5xl md:text-6xl font-bold text-neon-purple mb-6 animate-neon-flicker">
            Mystical Insights
          </h2>
          <p className="text-purple-300/80 text-xl font-light italic">
            Ancient lines speak of your destined paths
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const data = analysis[insight.key as keyof PalmAnalysis];
            
            return (
              <Card
                key={insight.key}
                className={`mystical-card backdrop-blur-sm border-2 ${insight.borderColor} ${insight.bgColor} hover:${insight.glowClass} transition-all duration-500 hover:scale-105 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-20"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full ${insight.bgColor} ${insight.borderColor} border-2 ${insight.glowClass}`}>
                      <Icon className={`w-6 h-6 ${insight.color} animate-pulse-glow`} />
                    </div>
                    <CardTitle className={`text-xl ${insight.color} mystical-title font-bold`}>
                      {insight.title}
                    </CardTitle>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={`${insight.borderColor} ${insight.color} font-medium text-sm px-3 py-1 w-fit`}
                  >
                    {data.trait}
                  </Badge>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-purple-200/90 leading-relaxed font-light">
                    {data.description}
                  </p>
                  
                  {/* Mystical corner decorations */}
                  <div className="absolute top-2 right-2 opacity-30">
                    <div className={`w-1 h-1 bg-current rounded-full animate-sparkle ${insight.color}`}></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-30" style={{ animationDelay: '1s' }}>
                    <div className={`w-1 h-1 bg-current rounded-full animate-sparkle ${insight.color}`}></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PalmInsightReport;
