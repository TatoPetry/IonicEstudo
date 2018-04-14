import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  //Base link for api
  private baseApiText = "https://api.themoviedb.org/3";
  //Private key to connect api
  private apiKey = "?api_key=36ff7491c30bf0a8f94be3e53b22b329";
  //Private Language opt
  private language = "&language=pt-BR";
  //Page select
  


  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }


//function to get latest moovies from api
  getLatestMovies(page = 1){
   return this.http.get(this.baseApiText + "/movie/latest"+this.apiKey+this.language+`&page=${page}`);
  }


  //function to get top rated movies from api
  getTopRated(page = 1){
    return this.http.get(this.baseApiText + "/movie/popular"+this.apiKey+this.language+`&page=${page}`);
    
  }



  getReview(filmeid){
    return this.http.get(this.baseApiText+`/movie/${filmeid}`+ this.apiKey+this.language);
  }
}
