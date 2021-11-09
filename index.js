const express = require('express');
morgan = require('morgan');
const app = express();

//Morgan middleware library to log all requests
app.use(morgan('common'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

//express.static to serve “documentation.html” file
app.use('/documentation.html', express.static('public'));

//Express GET route located at the endpoint “/movies” that returns a JSON object containing data about top 10 movies.
let top10Movies = [
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      director: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      director: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      director: 'Stephanie Meyer'
    },
    {
    title: 'Harry Potter and the Sorcerer\'s Stone',
      director: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      director: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      director: 'Stephanie Meyer'
    },
    {
    title: 'Harry Potter and the Sorcerer\'s Stone',
      director: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      director: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      director: 'Stephanie Meyer'
    },
    {
    title: 'Twilight',
      director: 'Stephanie Meyer'
    }
  ];


app.get('/movies', (req, res) => {
    res.json(top10Movies);
  });
  
// GET request that get a textual response
app.get('/', (req, res) => {
    res.send('Welcome to your Flix');
  });
  
  // listen for requests
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });

  
  







  

  
  
  