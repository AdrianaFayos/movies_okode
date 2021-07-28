import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})

export class MovieDetailsPage implements OnInit {

  movie : object = null;

  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute) { }

 // Get the id from the url, and calls getMovieDetail() from movieService
  ngOnInit() {

    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.movieService.getMovieDetail(id).subscribe( result => {this.movie = result} );

  }

}
