import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Television, Movie } from '../../interfaces/browser-response';
import Swiper, { SwiperOptions } from 'swiper/bundle';
import { MovieService } from '../../services/movie.service';
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
  selector: 'app-favorites-slideshow',
  templateUrl: './favorites-slideshow.component.html',
  styleUrls: ['./favorites-slideshow.component.css']
})
export class FavoritesSlideshowComponent implements OnInit {

  @Input() mediaType: string;
  @Input() mediaArray: Movie[] | Television[];

  slidesPerView = 5.3;
  swiper: Swiper;

  swiperParams: SwiperOptions = {
    // Optional parameters
    slidesPerView: this.slidesPerView,
    autoplay: {
      delay: 2500
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
      return;
    }

    if (windowsWidth < 768){
      this.slidesPerView = 3.3;
      return;
    }

  }

  constructor(private movieService: MovieService) {
    this.onResize();
  }

  ngOnInit(): void {
  }

  onSwiper(swiper): void {
    // console.log(swiper);
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
