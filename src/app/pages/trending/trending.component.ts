import { Component, OnInit } from '@angular/core';
import { Movie, Television } from 'src/app/interfaces/browser-response';
import { MovieService } from '../../services/movie.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  movies: Movie[];
  television: Television[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    // tslint:disable-next-line: deprecation
    combineLatest(

      this.movieService.getTrendingMovie(),
      this.movieService.getTrendingTelevision()

    ).subscribe(([movies, television]) => {

      this.movies = movies;
      this.television = television;

    });

  }

}
