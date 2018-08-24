# AppIGB
========================
Este repositorio contiene la prueba para la empresa IGB

## Instrucciones para correr el proyecto
=======================

#### Configuración base de datos
=======================

Primero debemos tener instalado MongoDB con el cual crearemos la base de datos con las instrucciones que se encuentran en el archivo:

--> insertDatabase.txt


#### Configuración backend aplicación
=======================

Lo siguiente es dirigirnos a la carpeta de BackEnd-IGB y ejecutar el siguiente comando:

  ```
npm install 
  ```

  Este instalara las dependencias necesarias para desplegar el proyecto, para correr el proyecto podemos hacerlo de dos formas con 

  ```
npm start --- nodemon server.js
  ```

Con la segunda instrucción si realizamos algun cambio en el código el servidor se actualizara automaticamente.

#### Endpoints de la aplicación
=======================

* http://localhost:8080//api/movies  -- Para obtener todas las peliculas
 
* http://localhost:8080/api/movies   -- Para crear una nueva pelicula el titulo, genero y thumbnail son obligatorios

  ```
Example: {
	"title" 			: "El origen",
    "description" 	: "Es una película estadounidense de ciencia ficción escrita, producida y dirigida por Christopher Nolan y protagonizada por Leonardo DiCaprio",
    "gender"        : "Ciencia ficción",
    "thumbnail" 		: "https://images-na.ssl-images-amazon.com/images/I/71J9BzTif3L._SY445_.jpg",
    "year" 		      : "2010",
    "duration" 			: "148 minutos"
}
  ```

 * http://localhost:8080/api/movies/:id  -- Para actualizar una pelicula le debemos enviar el id en los parametros y la información que queremos modificar en el body
 
 * http://localhost:8080/api/movies/:id -- Para actualizar una pelicula le debemos enviar el id
 

