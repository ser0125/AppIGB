import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
    data: any;
 
    constructor(public http: HttpClient){
        this.data = null;
    }
    getMovies(){
        if (this.data) {
          return Promise.resolve(this.data);
        }
     
        return new Promise(resolve => {
     
          this.http.get('http://localhost:8080/api/movies')
            .subscribe(data => {
              this.data = data;
              resolve(this.data);
            });
        });
      }
}