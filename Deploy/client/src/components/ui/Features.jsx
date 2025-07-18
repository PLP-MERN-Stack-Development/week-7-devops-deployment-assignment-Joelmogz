import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield, Zap, Monitor, GitBranch, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Deploy to modern cloud platforms with one-click setup and automatic scaling.',
      gradient: 'bg-gradient-primary'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated testing, building, and deployment with GitHub Actions.',
      gradient: 'bg-gradient-accent'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built-in security headers, HTTPS, and environment variable management.',
      gradient: 'bg-gradient-primary'
    },
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Application performance monitoring with error tracking and alerts.',
      gradient: 'bg-gradient-accent'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Code splitting, caching strategies, and asset optimization.',
      gradient: 'bg-gradient-primary'
    },
    {
      icon: Settings,
      title: 'Environment Management',
      description: 'Seamless configuration across development, staging, and production.',
      gradient: 'bg-gradient-accent'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Complete <span className="bg-gradient-primary bg-clip-text text-transparent">
              Deployment
            </span> Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to deploy, monitor, and maintain production-ready applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;