import { AfterViewInit, Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/browser-response';
import Swiper from 'swiper/bundle';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {

  @Input() movies: Movie[];
  swiper: Swiper;

  constructor(private movieService: MovieService) {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay: {
        delay: 3000
      },
    });

  }

  onSlideNext(): void{
    this.swiper.slideNext();
  }

  onSlidePrev(): void{
    this.swiper.slidePrev();
  }

  onMovieClick(movie: Movie): void {
    this.movieService.onMovieClick(movie);
  }


}
