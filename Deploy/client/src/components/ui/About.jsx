import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Deployed', icon: TrendingUp },
    { number: '50+', label: 'Happy Developers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Award }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Our <span className="bg-gradient-primary bg-clip-text text-transparent">
                Deployment Platform
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in making deployment simple and reliable. Our platform 
              provides everything you need to take your applications from development 
              to production with confidence.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={20} />
                <span>Automated deployment pipelines</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={20} />
                <span>Real-time monitoring and alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={20} />
                <span>Scalable infrastructure solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={20} />
                <span>Security-first approach</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;