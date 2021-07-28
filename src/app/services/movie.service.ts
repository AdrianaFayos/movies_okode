import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovies } from '../model/IMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string = '';

  constructor(private http: HttpClient) { }

  searchMovies (title:string) {

    this.url = `https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${encodeURI(title)}`;

    return this.http.get<IMovies>(this.url).pipe(map(results => results['search']));

  }

  getMovieDetail () {

  }
}
