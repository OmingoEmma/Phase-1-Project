const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Serve the static files from the current directory
app.use(express.static('.'));

// Get a random quote from the db.json file
app.get('/api/quotes/random', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading db.json file' });
    }

    const quotes = JSON.parse(data);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

fetch('/api/quotes/random')
  .then(response => response.json())
  .then(quote => {
    console.log(quote);
  })
  .catch(error => {
    console.error('Error:', error);
  });