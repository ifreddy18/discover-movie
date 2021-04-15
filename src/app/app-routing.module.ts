import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { TelevisionComponent } from './pages/television/television.component';
import { AdvancedBrowserComponent } from './pages/advanced-browser/advanced-browser.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { LoginComponent } from './auth/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'favorites', component: MyListComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'movie/:id', component: PeliculaComponent},
  {path: 'tv/:id', component: TelevisionComponent},
  {path: 'search/:texto', component: BuscarComponent},
  {path: 'search', component: AdvancedBrowserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
