
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Save, FileText, Clock, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SaveReflectSection = ({ chatHistory, savedInsights, onSaveInsight }) => {
  const [currentReflection, setCurrentReflection] = useState('');
  const { toast } = useToast();

  const generateJournalSummary = () => {
    if (chatHistory.length === 0) return "No conversations yet.";
    
    const lastChat = chatHistory[chatHistory.length - 1];
    const summaries = [
      `Explored ${lastChat.timeline} and discovered new perspectives on creative fulfillment.`,
      `Had a meaningful conversation with ${lastChat.timeline} about life choices and alternate paths.`,
      `Gained insights about emotional patterns and decision-making through ${lastChat.timeline}.`,
      `Reflected on the relationship between palm traits and life direction with ${lastChat.timeline}.`
    ];
    
    return summaries[Math.floor(Math.random() * summaries.length)];
  };

  const handleSaveInsight = () => {
    if (!currentReflection.trim()) {
      toast({
        title: "Please write a reflection",
        description: "Add your thoughts before saving",
        variant: "destructive",
      });
      return;
    }

    onSaveInsight(currentReflection);
    setCurrentReflection('');
    toast({
      title: "Insight saved!",
      description: "Your reflection has been added to your timeline",
    });
  };

  const handleGenerateSummary = () => {
    const summary = generateJournalSummary();
    setCurrentReflection(summary);
    toast({
      title: "Summary generated",
      description: "Based on your recent conversations",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-200 mb-4">
            Save & Reflect
          </h2>
          <p className="text-purple-300/80 text-lg">
            Capture insights from your journey of self-discovery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Reflection */}
          <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-200">
                <FileText className="w-5 h-5 mr-2" />
                Current Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={currentReflection}
                onChange={(e) => setCurrentReflection(e.target.value)}
                placeholder="What insights did you gain from this conversation? How do these alternate paths make you feel about your current choices?"
                className="min-h-[120px] bg-purple-900/20 border-purple-500/30 text-purple-200 placeholder:text-purple-400/60"
              />
              
              <div className="flex gap-3">
                <Button
                  onClick={handleSaveInsight}
                  className="bg-purple-600 hover:bg-purple-700 flex-1"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save This Insight
                </Button>
                
                <Button
                  onClick={handleGenerateSummary}
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Summary
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Saved Insights Timeline */}
          <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-200">
                <Clock className="w-5 h-5 mr-2" />
                Your Insight Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80">
                {savedInsights.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-purple-400/50 mx-auto mb-4" />
                    <p className="text-purple-300/60">
                      No insights saved yet. Start reflecting on your conversations!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {savedInsights.slice().reverse().map((insight) => (
                      <div
                        key={insight.id}
                        className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20"
                      >
                        <p className="text-purple-200 leading-relaxed mb-2">
                          {insight.content}
                        </p>
                        <div className="flex justify-between items-center text-xs text-purple-400/60">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {insight.timestamp.toLocaleDateString()}
                          </span>
                          <span className="bg-purple-500/20 px-2 py-1 rounded">
                            {insight.timeline}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Chat History Summary */}
        {chatHistory.length > 0 && (
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Recent Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chatHistory.slice(-6).map((chat) => (
                  <div
                    key={chat.id}
                    className="p-3 bg-purple-900/20 rounded border border-purple-500/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-300">
                        {chat.timeline}
                      </span>
                      <span className="text-xs text-purple-400/60">
                        {chat.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-purple-200/80 line-clamp-2">
                      {chat.user}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SaveReflectSection;
