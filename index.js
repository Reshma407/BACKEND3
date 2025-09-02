const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/about', (req, res) => {
  res.send('This is the About page');
});


// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

