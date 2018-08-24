
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
  Movies.create({ title 			: req.body.title,
    description 	: req.body.description,
    gender        : req.body.gender,
    thumbnail 		: req.body.thumbnail,
    year 		      : req.body.year,
    duration 			: req.body.duration },
   function (err)
{
//Si se encuentra un problema se imprime por la consola
if (err)
{
console.dir(err);
}
res.json({ message: 'success' });

});
};
  
//Este metodo actualiza una pelicula
function updateMovie(req,res){
  Movies.findById({ _id: req.params.id }, (err, movie) =>
  {

     //Si se encuentra algun error imprimir por la consola
     if (err)
     {
        console.dir(err);
     }
     else
     {
       console.log(movie.title);

        // Se asignan los valores a los campos respectivos
        movie.title 			  	= req.body.title 		|| movie.title;
        movie.description 		= req.body.description 	|| movie.description;
        movie.gender 		      = req.body.gender 	|| movie.gender;
        movie.thumbnail  	    = req.body.thumbnail	|| movie.thumbnail;
        movie.year  		      = req.body.year	|| movie.year;
        movie.duration 		    = req.body.duration 	|| movie.duration;


        //Guarda el documento actualizado
        movie.save((err, updatedMovie) =>
        {
          //Si se encuentra algun error imprimir por la consola
           if (err)
           {
              res.status(500).send(err)
           }
           res.json(updatedMovie);
        });
     }

  });
  }
  
//Este metodo borra una pelicula
function deleteMovie(req,res){
  Movies.findByIdAndRemove({ _id: req.params.id }, (err, movie) =>
  {

     //Si se encuentra algun error imprimir por la consola
     if (err)
     {
        console.dir(err);
     }

     res.json(movie);

  });
  }
  module.exports = { // Exporta los metodos para el router
    getMovies: getMovies,
    createMovie: createMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
  };