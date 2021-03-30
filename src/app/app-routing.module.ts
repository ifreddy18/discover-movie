import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { TelevisionComponent } from './pages/television/television.component';
import { AdvancedBrowserComponent } from './pages/advanced-browser/advanced-browser.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'my-lists', component: MyListComponent},
  {path: 'movie/:id', component: PeliculaComponent},
  {path: 'tv/:id', component: TelevisionComponent},
  {path: 'search/:texto', component: BuscarComponent},
  {path: 'search', component: AdvancedBrowserComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
