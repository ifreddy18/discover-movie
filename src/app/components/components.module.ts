// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

// Components
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { TelevisionPosterGridComponent } from './television-poster-grid/television-poster-grid.component';
import { SeasonsComponent } from './seasons/seasons.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { RecommendationSlideshowComponent } from './recommendation-slideshow/recommendation-slideshow.component';

// Others
import { SwiperModule } from 'swiper/angular';
import { FavoritesSlideshowComponent } from './favorites-slideshow/favorites-slideshow.component';
import { PillsComponent } from './pills/pills.component';
import { AlertNoFavoritesComponent } from './alert-no-favorites/alert-no-favorites.component';

@NgModule({
  declarations: [
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
    TelevisionPosterGridComponent,
    SeasonsComponent,
    RecommendationSlideshowComponent,
    FavoritesSlideshowComponent,
    PillsComponent,
    AlertNoFavoritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
    SwiperModule
  ],
  exports: [
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
    TelevisionPosterGridComponent,
    SeasonsComponent,
    RecommendationSlideshowComponent,
    SwiperModule,
    FavoritesSlideshowComponent,
    PillsComponent,
    AlertNoFavoritesComponent,

  ]
})
export class ComponentsModule { }
