// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Components
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TrendingComponent } from './trending/trending.component';
import { MyListComponent } from './my-list/my-list.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Libraries
import { RatingModule } from 'ng-starrating';
import { AdvancedBrowserComponent } from './advanced-browser/advanced-browser.component';
import { TelevisionComponent } from './television/television.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    TrendingComponent,
    MyListComponent,
    AdvancedBrowserComponent,
    TelevisionComponent,
    RecommendationsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
    SharedModule
  ]
})
export class PagesModule { }
