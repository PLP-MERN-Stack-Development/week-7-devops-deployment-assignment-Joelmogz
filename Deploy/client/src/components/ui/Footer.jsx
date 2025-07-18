
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'Features', href: '#services' },
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Status Page', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@deployready.com', label: 'Email' }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4 text-background">
              DeployReady
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Making deployment simple and reliable for developers worldwide. 
              Deploy with confidence, scale with ease.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon size={20} className="text-background" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © {currentYear} DeployReady. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;