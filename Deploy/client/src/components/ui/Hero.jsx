import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Deploy
              </span>{' '}
              Your Dreams to Reality
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn modern deployment strategies and DevOps essentials. 
              From local development to production-ready applications with 
              CI/CD pipelines, monitoring, and scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6"
              >
                Start Learning
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary hover:bg-primary/5"
              >
                View Docs
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-primary/10 rounded-lg">
                  <Code className="text-primary" size={32} />
                  <div>
                    <h3 className="font-semibold">Frontend Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Deploy React apps to Vercel, Netlify
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-accent/10 rounded-lg">
                  <Database className="text-accent" size={32} />
                  <div>
                    <h3 className="font-semibold">Backend Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Deploy APIs to Railway, Render
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg">
                  <Globe className="text-primary" size={32} />
                  <div>
                    <h3 className="font-semibold">Full Stack Apps</h3>
                    <p className="text-sm text-muted-foreground">
                      End-to-end deployment pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;