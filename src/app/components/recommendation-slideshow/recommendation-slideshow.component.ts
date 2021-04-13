import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Television, Movie } from '../../interfaces/browser-response';
import { CustomMoviesService } from '../../services/custom-movies.service';
import { MovieService } from '../../services/movie.service';
import Swiper, { SwiperOptions } from 'swiper/bundle';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
  Autoplay

} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]);


@Component({
  selector: 'app-recommendation-slideshow',
  templateUrl: './recommendation-slideshow.component.html',
  styleUrls: ['./recommendation-slideshow.component.css']
})
export class RecommendationSlideshowComponent implements OnInit {

  @Input() mediaType: string;
  @Input() id: number;
  recommendations: Movie[] | Television[];

  slidesPerView = 5.3;
  swiper: Swiper;

  swiperParams: SwiperOptions = {
    // Optional parameters
    slidesPerView: this.slidesPerView,
    autoplay: {
      delay: 3500
    },

    // Scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: false
    },
  };

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    const windowsWidth = window.innerWidth;

    this.slidesPerView = 5.3;

    if (windowsWidth < 992){
      this.slidesPerView = 4.3;
    }

    if (windowsWidth < 768){
      this.slidesPerView = 3.3;
    }

  }

  constructor(private customMovieSevice: CustomMoviesService,
              private movieService: MovieService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.customMovieSevice.getRecommendation(this.mediaType, this.id).subscribe( resp => {
      this.recommendations = resp;
    });

  }

  onSwiper(swiper): void {
    this.swiper = swiper;
  }

  onSlideChange(): void {
    // console.log('slide change');
  }

  slideNext(): void {
    this.swiper.slideNext();
  }

  slidePrev(): void {
    this.swiper.slidePrev();
  }

  onTelevisionClick(tv: Television): void {
    this.movieService.onTelevisionClick(tv);
  }

  onMovieClick(movie: Movie): void {
    this.movieService.onMovieClick(movie);
  }


}
