const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'DeployReady API is running!',
    version: '1.0.0',
    status: 'healthy'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'All fields are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email format'
    });
  }

  // Simulate processing contact form
  console.log('Contact form submission:', { name, email, message });
  
  res.status(200).json({
    message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    success: true
  });
});

// API statistics endpoint
app.get('/api/stats', (req, res) => {
  res.json({
    projectsDeployed: 150,
    happyDevelopers: 75,
    uptimePercentage: 99.9,
    supportHours: '24/7'
  });
});

// Features endpoint
app.get('/api/features', (req, res) => {
  res.json([
    {
      title: 'Cloud Deployment',
      description: 'Deploy to modern cloud platforms with one-click setup and automatic scaling.',
      icon: 'cloud'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automated testing, building, and deployment with GitHub Actions.',
      icon: 'git-branch'
    },
    {
      title: 'Security First',
      description: 'Built-in security headers, HTTPS, and environment variable management.',
      icon: 'shield'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Application performance monitoring with error tracking and alerts.',
      icon: 'monitor'
    },
    {
      title: 'Performance Optimized',
      description: 'Code splitting, caching strategies, and asset optimization.',
      icon: 'zap'
    },
    {
      title: 'Environment Management',
      description: 'Seamless configuration across development, staging, and production.',
      icon: 'settings'
    }
  ]);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
});