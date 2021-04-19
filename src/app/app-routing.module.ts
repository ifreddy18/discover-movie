import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { TelevisionComponent } from './pages/television/television.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AdvancedBrowserComponent } from './pages/advanced-browser/advanced-browser.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'movie/:id', component: PeliculaComponent },
  { path: 'tv/:id', component: TelevisionComponent },
  { path: 'search/:texto', component: BuscarComponent },
  { path: 'search', component: AdvancedBrowserComponent },

  { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
  { path: 'signup', component: SignupComponent, canActivate: [ AuthGuard ] },
  { path: 'profile', component: UserProfileComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
