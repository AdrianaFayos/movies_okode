import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})

export class MoviesPage implements OnInit {

  results : Observable<Movie>;
  title: string;

  constructor(public movieService: MovieService) { }

  ngOnInit() {
  }

  // When the user writes any title at the searchbar this function calls searchMovies() from movieService
  searchByTitle ():void {
    this.results = this.movieService.searchMovies(this.title)
  }

}
