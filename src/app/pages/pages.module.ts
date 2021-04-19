// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom Modules
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TrendingComponent } from './trending/trending.component';
import { AdvancedBrowserComponent } from './advanced-browser/advanced-browser.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TelevisionComponent } from './television/television.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FavoritesComponent } from './favorites/favorites.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Libraries
import { RatingModule } from 'ng-starrating';

@NgModule({
	declarations: [
		HomeComponent,
		PeliculaComponent,
		BuscarComponent,
		TrendingComponent,
		AdvancedBrowserComponent,
		TelevisionComponent,
		RecommendationsComponent,
		UserProfileComponent,
		FavoritesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ComponentsModule,
		PipesModule,
		RatingModule,
		SharedModule,
		AuthModule
	]
})
export class PagesModule { }
