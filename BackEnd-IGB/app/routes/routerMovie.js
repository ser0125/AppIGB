var express = require('express');
var router = express.Router();
var movie = require('../services/movie');

//De acuerdo a la ruta ejecutamos el metodo de los servicios
router.get('/api/movies', movie.getMovies);
router.post('/api/movies', movie.createMovie);
router.put('/api/movies/:id', movie.updateMovie);
router.delete('/api/movies/:id', movie.deleteMovie);

module.exports = router;