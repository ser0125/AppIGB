import { HomePage } from './../home/home';
import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesService: MoviesService) {
   this.movie =	this.navParams.data.movie;
  }

  deleteMovie(){
    this.moviesService.deleteMovie(this.movie);
    this.navCtrl.setRoot(HomePage);
  }
}
