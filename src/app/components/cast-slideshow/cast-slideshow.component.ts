import { Component, Input, HostListener } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
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
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent  {

  @Input() cast: Cast[];

  slidesPerView = 5.3;
  swiper: Swiper;

  swiperParams: SwiperOptions = {
    // Optional parameters
    slidesPerView: this.slidesPerView,
    // autoplay: {
    //   delay: 2500
    // },

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

  constructor() {
    this.onResize();
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

}
