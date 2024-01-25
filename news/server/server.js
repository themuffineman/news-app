const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory database (for simplicity, use an array)
const users = [];

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint for user signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Add the new user to the array
  users.push({ username, password });

  return res.status(201).json({ message: 'User created successfully' });
});

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the array
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
