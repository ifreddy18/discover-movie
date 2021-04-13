import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../interfaces/browser-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void{
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max){

      if (this.movieService.cargando) { return; }

      this.movieService.getNowPlaying().subscribe( resp => {
        this.movies.push(...resp);
      });
    }

  }

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.movieService.getNowPlaying().subscribe( resp => {

      this.movies = resp;
      this.moviesSlideShow = resp;

    });
  }

  ngOnDestroy(): void {
    this.movieService.resetMoviePages();
  }

}
