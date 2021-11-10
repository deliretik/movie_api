const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

//Morgan middleware library to log all requests
app.use(morgan('common'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

//express.static to serve “documentation.html” file
app.use('/documentation.html', express.static('public'));

//Express GET route located at the endpoint “/movies” that returns a JSON object containing data about top 10 movies.
let movies = [
  {
    movie: 
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      genre: 'Thriller',
      director: {
        name:'J.K. Rowling',
        birth: 1980
      }
    }
  }];
//user's data 
  let user = [
    {
      id:1,
      name: 'omar alaoui',
      userMovieList: {
      title: 'Harry Potter and the Sorcerer\'s Stone'
      }
    }

  ];
  
// GET request that get a textual response
app.get('/', (req, res) => {
    res.send('Welcome to your Flix');
  });

  // Gets the list of all movies
  app.get('/movies', (req, res) => {
    res.json(movies);
  });

  //get data about a single movie by name
  app.get('/movies/:movie/:name', (req, res) => {
    res.json(movies.find((movie) =>
      { return movie.title === req.params.title}));
  });

  //New user registration
  app.post('/user', (req, res) => {
    let newUser = req.body;
  
    if (!newUser.name) {
      const message = 'Missing name in request body';
      res.status(400).send(message);
    } else {
      newUser.id = uuid.v4();
      user.push(newUser);
      res.status(201).send(newUser);
    }
  });

  //User informations update
  app.put('/user/:name', (req, res) => {
    let user = user.find((user) => { return user.name === req.params.name });
  
    if (user) {
      user.name[req.params.name] = parseInt(req.params.name);
      res.status(201).send('User ' + req.params.name + ' was assigned a new name ' + req.params.name + ' in ' + req.params.name);
    } else {
      res.status(404).send('User with the name ' + req.params.name + ' was not found.');
    }
  });

  //user de-registration
  app.delete('/user/:id', (req, res) => {
    let user = user.find((user) => { return user.id === req.params.id });
  
    if (user) {
      user = user.filter((obj) => { return obj.id !== req.params.id });
      res.status(201).send('User ' + req.params.id + ' was deleted.');
    }
  });

  //add a movie to user's list of movies
  app.post('/user/:userMovieList', (req, res) => {
    let user = req.body;

  });

  
  // listen for requests
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });

  
  







  

  
  
  