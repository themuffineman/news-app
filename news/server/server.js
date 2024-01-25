const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


const users = [];

let nextUserId = 1; 

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint for user signup
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const userId = nextUserId++;
  users.push({ userId, name, email, password });

  return res.status(201).json({ message: 'User created successfully', userId, name: users.name });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful', user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
