//requiring mongoose
const mongoose = require('mongoose');
//requiring hash module
const bcrypt = require('bcrypt');

//movies collection documents schema
let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: {
      Name: String,
      Description: String
    },
    Director: {
      Name: String,
      Bio: String
    },
    Actors: [String],
    ImagePath: String,
    Featured: Boolean
  });
  
  //users collection documents schema
  let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });
  //hashPassword function
  userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
  };
  //validatePassword
  userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
  };

  let Movie = mongoose.model('Movie', movieSchema);
  let User = mongoose.model('User', userSchema);
  
  module.exports.Movie = Movie;
  module.exports.User = User;