
var Movies = require('../models/movie');

//Este metodo retorna todas las peliculas
function getMovies(req, res) {
    Movies.find((err, movies) =>
    {
       // Si encontramos error lo imprimimos en la consola
       if (err)
       {
          console.dir(err);
       }
 
       // Enviamos el objeto en un json
       res.json(movies);
 
    });
  };
  
//Este metodo crea una pelicula
function createMovie(req, res){ 
    
};
  
//Este metodo actualiza una pelicula
function updateMovie(req,res){

  }
  
//Este metodo borra una pelicula
function deleteMovie(req,res){
  
  }
  module.exports = { // Exporta los metodos para el router
    getMovies: getMovies,
    createMovie: createMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
  };