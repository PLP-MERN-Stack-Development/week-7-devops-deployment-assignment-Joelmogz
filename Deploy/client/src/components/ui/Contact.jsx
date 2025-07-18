import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@deployready.com',
      gradient: 'bg-gradient-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      gradient: 'bg-gradient-accent'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
      gradient: 'bg-gradient-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to deploy your next project? Let's discuss your requirements and 
            find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow h-12 text-lg"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.gradient} rounded-lg flex items-center justify-center`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-primary text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Ready to Deploy?</h3>
                <p className="mb-4 opacity-90">
                  Join thousands of developers who trust our platform for their deployments.
                </p>
                <Button variant="secondary" className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;