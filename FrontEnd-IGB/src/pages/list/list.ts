import { MovieDetailPage } from './../movie-detail/movie-detail';
import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListMoviePage {
  selectedItem: any;
  movies: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, public moviesService: MoviesService) {
    // If we navigated to this page, we will have an movie available as a nav param
    this.selectedItem = navParams.get('movie');
    this.movies = null;
  }
  movieTapped(movie) {
    // Cargamos la vista detallada de esa pelicula
    this.navCtrl.push(MovieDetailPage, {
      movie: movie
    });
  }

  ionViewWillEnter(){
    this.moviesService.getMovies().then(
      (data: any) =>{
        console.log(data);
        this.movies = data;
      }
    )
  }
}
