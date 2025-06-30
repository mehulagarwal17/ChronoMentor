import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Save, Heart, Lightbulb, Calendar, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SaveReflectSection = ({ chatHistory, savedInsights, onSaveInsight }) => {
  const [newReflection, setNewReflection] = useState('');
  const { toast } = useToast();

  const handleSaveReflection = () => {
    if (!newReflection.trim()) {
      toast({
        title: "Please write a reflection",
        description: "Your thoughts are valuable to us",
        variant: "destructive",
      });
      return;
    }

    onSaveInsight(newReflection);
    setNewReflection('');
    
    toast({
      title: "Reflection saved",
      description: "Your insight has been preserved for the future",
    });
  };

  return (
    <section id="reflections" className="py-20 px-4 mystic-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="mystical-border rounded-full p-1 inline-block mb-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-full px-4 py-2">
                <span className="text-neon-gold text-xs font-medium tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  ✨ Sacred Reflections ✨
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="mystical-title text-5xl md:text-6xl font-bold text-neon-purple mb-6 animate-neon-flicker">
            Soul Archive
          </h2>
          <p className="text-purple-300/80 text-xl font-light italic">
            Capture your mystical journey and insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Reflection Card */}
          <Card className="mystical-card bg-card/50 backdrop-blur-sm border-purple-500/20 neon-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-neon-purple mystical-title">
                <BookOpen className="w-6 h-6 animate-pulse-glow" />
                <span>Write Your Reflection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={newReflection}
                onChange={(e) => setNewReflection(e.target.value)}
                placeholder="What insights has your mystical journey revealed? What paths call to your soul?"
                className="min-h-[120px] bg-purple-900/20 border-purple-500/30 text-purple-200 placeholder:text-purple-400/60 focus:border-neon-purple"
                rows={5}
              />
              <Button
                onClick={handleSaveReflection}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 neon-glow-pink"
              >
                <Save className="w-4 h-4 mr-2" />
                Preserve This Insight
              </Button>
            </CardContent>
          </Card>

          {/* Saved Insights */}
          <Card className="mystical-card bg-card/50 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-neon-gold mystical-title">
                <Heart className="w-6 h-6 animate-pulse-glow" />
                <span>Sacred Collection</span>
                <Badge variant="outline" className="ml-auto text-neon-gold border-amber-500/50">
                  {savedInsights.length} insights
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                {savedInsights.length === 0 ? (
                  <div className="text-center py-12">
                    <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-4 opacity-50" />
                    <p className="text-purple-300/60 italic">
                      Your insights will appear here as you explore...
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {savedInsights.map((insight) => (
                      <Card
                        key={insight.id}
                        className="bg-purple-900/20 border-purple-500/30 hover:bg-purple-800/30 transition-colors"
                      >
                        <CardContent className="p-4">
                          <p className="text-purple-200/90 leading-relaxed mb-3 font-light">
                            {insight.content}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <Badge 
                              variant="outline" 
                              className="text-neon-blue border-blue-500/50 bg-blue-500/10"
                            >
                              {insight.timeline}
                            </Badge>
                            <div className="flex items-center text-purple-400/80">
                              <Calendar className="w-3 h-3 mr-1" />
                              {insight.timestamp.toLocaleDateString()}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SaveReflectSection;
