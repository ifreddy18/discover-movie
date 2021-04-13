import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie, Television } from 'src/app/interfaces/browser-response';
import { MovieService } from '../../services/movie.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit, OnDestroy {

  movies: Movie[];
  television: Television[];
  displayList: string;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void{
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max){

      if (this.movieService.cargando) { return; }

      if (this.displayList === 'movie') {
        this.movieService.getTrendingMovie().subscribe( resp => {
          this.movies.push(...resp);
        });
      }

      if (this.displayList === 'tv') {
        this.movieService.getTrendingTelevision().subscribe( resp => {
          this.television.push(...resp);
        });
      }



    }

  }

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

  ngOnDestroy(): void {
    this.movieService.resetMoviePages();
  }



}
