const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Log the contact submission
  console.log('📧 New contact submission:');
  console.log(`   Name: ${name || 'N/A'}`);
  console.log(`   Email: ${email || 'N/A'}`);
  console.log(`   Subject: ${subject || 'N/A'}`);
  console.log(`   Message: ${message || 'N/A'}`);
  console.log('-'.repeat(50));
  
  // Send success response
  res.json({
    success: true,
    message: 'Contact form submitted successfully'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 AutomatIA server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
  console.log(`📧 Contact form submissions will be logged here`);
  console.log('-'.repeat(50));
});