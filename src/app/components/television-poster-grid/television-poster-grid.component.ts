import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Television } from '../../interfaces/browser-response';
import { CustomMoviesService } from 'src/app/services/custom-movies.service';

@Component({
  selector: 'app-television-poster-grid',
  templateUrl: './television-poster-grid.component.html',
  styleUrls: ['./television-poster-grid.component.css']
})
export class TelevisionPosterGridComponent implements OnInit {

  @Input() television: Television;
  likesTelevisionId: number[] = [];
  likesTelevision: Television[];

  constructor(public movieService: MovieService,
              public customMovieService: CustomMoviesService
  ) {
    this.likesTelevision = this.customMovieService.likesTelevision;
    this.likesTelevisionId = this.customMovieService.likesTelevisionId;
  }

  ngOnInit(): void {
  }

  onTelevisionClick(television: Television): void{
    this.movieService.onTelevisionClick(television);
  }

  toFavoritesTelevision(television: Television): void {
    this.customMovieService.toFavoritesTelevision(television) ;
    this.likesTelevisionId = this.customMovieService.likesTelevisionId;
  }

}
