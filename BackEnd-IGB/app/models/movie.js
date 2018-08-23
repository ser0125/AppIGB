//Usaremos la libreria de mongoose que nos permite crear esquemas facilmente
const mongoose = require('mongoose');  

//Nos conectamos a la base de datos
mongoose.connect('mongodb://localhost/moviesdb', function(error){
      if(error) console.log(error);
      console.log("connection successful");
  });

var Schema = mongoose.Schema; 
// Creamos un esquema
    var movieSchema = new Schema({
        title: { type: String, required: true, unique: true },
        description: String,
        gender: { type: String, required: true },
        thumbnail: { type: String, required: true },
        year: String,
        duration: String
      });

      var collectionName = 'moviesCollection';

// Debemos crear el modelo a partir del schema
      var Movies = mongoose.model('Movies', movieSchema, collectionName);

//Exportamos el modelo para hacer uso en la logica del servicio
      module.exports = Movies;