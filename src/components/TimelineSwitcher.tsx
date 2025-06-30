
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Briefcase, Heart, Compass, Palette, TreePine } from 'lucide-react';

const TimelineSwitcher = ({ selectedTimeline, onTimelineSelect }) => {
  const timelines = [
    {
      id: 'Creative Me',
      title: 'Creative Me',
      description: 'The artist who followed their passion for creative expression',
      icon: Palette,
      color: 'text-neon-pink',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      glowClass: 'neon-glow-pink'
    },
    {
      id: 'Startup Me',
      title: 'Startup Me', 
      description: 'The entrepreneur who built innovative businesses from scratch',
      icon: Briefcase,
      color: 'text-neon-blue',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      glowClass: 'neon-glow-blue'
    },
    {
      id: 'Family-Focused Me',
      title: 'Family-Focused Me',
      description: 'The one who prioritized relationships and family above all else',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30',
      glowClass: 'neon-glow'
    },
    {
      id: 'Spiritual Me',
      title: 'Spiritual Me',
      description: 'The seeker who found meaning through spiritual exploration',
      icon: Compass,
      color: 'text-neon-purple',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      glowClass: 'neon-glow'
    },
    {
      id: 'Adventure Me',
      title: 'Adventure Me',
      description: 'The explorer who traveled the world and lived for experiences',
      icon: TreePine,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      glowClass: 'neon-glow'
    },
    {
      id: 'Canada Me',
      title: 'Canada Me',
      description: 'The version who moved to Canada and built a new life there',
      icon: User,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      glowClass: 'neon-glow'
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
                  ✨ Choose Your Path ✨
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="mystical-title text-5xl md:text-6xl font-bold text-neon-purple mb-6 animate-neon-flicker">
            Timeline Nexus
          </h2>
          <p className="text-purple-300/80 text-xl font-light italic">
            Explore different versions of your life path
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-8 pb-6 min-w-max px-4">
            {timelines.map((timeline, index) => {
              const Icon = timeline.icon;
              const isSelected = selectedTimeline === timeline.id;
              
              return (
                <Card
                  key={timeline.id}
                  className={`mystical-card min-w-[300px] cursor-pointer transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                    isSelected 
                      ? `${timeline.bgColor} ${timeline.borderColor} border-2 ${timeline.glowClass} transform scale-105` 
                      : 'bg-card/30 border-purple-500/30 hover:bg-card/50 hover:border-purple-400/50'
                  }`}
                  onClick={() => onTimelineSelect(timeline.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Background shimmer effect */}
                    {isSelected && (
                      <div className="absolute inset-0 animate-shimmer opacity-30"></div>
                    )}
                    
                    <div className="flex items-start space-x-6 relative z-10">
                      <div className={`p-4 rounded-full ${timeline.bgColor} ${timeline.borderColor} border-2 ${isSelected ? timeline.glowClass : ''} transition-all duration-300`}>
                        <Icon className={`w-8 h-8 ${timeline.color} ${isSelected ? 'animate-pulse-glow' : ''}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`mystical-title text-xl font-bold mb-3 ${isSelected ? timeline.color : 'text-purple-200'} transition-colors duration-300`}>
                          {timeline.title}
                        </h3>
                        <p className="text-sm text-purple-300/80 leading-relaxed font-light">
                          {timeline.description}
                        </p>
                        
                        {isSelected && (
                          <div className="mt-4 flex items-center space-x-2 text-neon-gold font-medium animate-fade-in-up">
                            <div className="w-2 h-2 bg-neon-gold rounded-full animate-sparkle"></div>
                            <span className="text-xs tracking-wider uppercase">Currently Active</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Mystical corner decorations */}
                    <div className="absolute top-2 right-2 opacity-30">
                      <div className="w-1 h-1 bg-neon-purple rounded-full animate-sparkle"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 opacity-30" style={{ animationDelay: '1s' }}>
                      <div className="w-1 h-1 bg-neon-pink rounded-full animate-sparkle"></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default TimelineSwitcher;
