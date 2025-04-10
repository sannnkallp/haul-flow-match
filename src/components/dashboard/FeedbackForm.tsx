
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { toast } from 'sonner';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [feedbackText, setFeedbackText] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackText.trim()) {
      toast.error('Please enter your feedback');
      return;
    }
    
    console.log('Feedback submitted:', {
      type: feedbackType,
      feedback: feedbackText,
      email
    });
    
    // In a real application, you would send this data to your backend
    toast.success('Thank you for your feedback! We appreciate your input.');
    setSubmitted(true);
    setFeedbackText('');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-logistics-blue" />
          Share Your Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="py-8 text-center">
            <ThumbsUp className="h-16 w-16 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feedback Received!</h3>
            <p className="text-gray-600">
              Thank you for helping us improve HaulFlow. Your input is valuable to us.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="feedbackType">Feedback Type</Label>
              <RadioGroup 
                id="feedbackType" 
                value={feedbackType} 
                onValueChange={setFeedbackType}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="suggestion" id="suggestion" />
                  <Label htmlFor="suggestion" className="cursor-pointer">Suggestion</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="issue" id="issue" />
                  <Label htmlFor="issue" className="cursor-pointer">Issue/Bug</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="praise" id="praise" />
                  <Label htmlFor="praise" className="cursor-pointer">Praise</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea 
                id="feedback" 
                placeholder="Share your thoughts, ideas, or report issues..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                rows={5}
                className="resize-none"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email for follow-ups"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-gray-500">We'll only use this to follow up on your feedback if needed.</p>
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-logistics-teal hover:bg-logistics-blue"
              >
                <Send className="mr-2 h-4 w-4" /> Submit Feedback
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
