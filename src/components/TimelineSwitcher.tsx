
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
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'Startup Me',
      title: 'Startup Me', 
      description: 'The entrepreneur who built innovative businesses from scratch',
      icon: Briefcase,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'Family-Focused Me',
      title: 'Family-Focused Me',
      description: 'The one who prioritized relationships and family above all else',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      id: 'Spiritual Me',
      title: 'Spiritual Me',
      description: 'The seeker who found meaning through spiritual exploration',
      icon: Compass,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'Adventure Me',
      title: 'Adventure Me',
      description: 'The explorer who traveled the world and lived for experiences',
      icon: TreePine,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'Canada Me',
      title: 'Canada Me',
      description: 'The version who moved to Canada and built a new life there',
      icon: User,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-200 mb-4">
            Choose Your Timeline
          </h2>
          <p className="text-purple-300/80 text-lg">
            Explore different versions of your life path
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-6 pb-4 min-w-max">
            {timelines.map((timeline) => {
              const Icon = timeline.icon;
              const isSelected = selectedTimeline === timeline.id;
              
              return (
                <Card
                  key={timeline.id}
                  className={`min-w-[280px] cursor-pointer transition-all duration-300 hover:scale-105 ${
                    isSelected 
                      ? `${timeline.bgColor} ${timeline.borderColor} border-2 glow-gold` 
                      : 'bg-card/50 border-purple-500/20 hover:bg-card/70'
                  }`}
                  onClick={() => onTimelineSelect(timeline.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${timeline.bgColor} ${timeline.borderColor} border`}>
                        <Icon className={`w-6 h-6 ${timeline.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-2 ${isSelected ? timeline.color : 'text-purple-200'}`}>
                          {timeline.title}
                        </h3>
                        <p className="text-sm text-purple-300/70 leading-relaxed">
                          {timeline.description}
                        </p>
                        {isSelected && (
                          <div className="mt-3 text-xs text-amber-400 font-medium">
                            ✨ Currently Active
                          </div>
                        )}
                      </div>
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
