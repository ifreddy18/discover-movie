import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/browser-response';
import { MovieService } from '../../services/movie.service';
import { CustomMoviesService } from '../../services/custom-movies.service';

@Component({
	selector: 'app-peliculas-poster-grid',
	templateUrl: './peliculas-poster-grid.component.html',
	styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent {

	@Input() movies: Movie[];

	constructor(
		public movieService: MovieService,
		public customMovieService: CustomMoviesService
	) { }

	onMovieClick(movie: Movie): void {
		this.movieService.onMovieClick(movie);
	}

	toFavoritesMovies(movie: Movie): void {
		this.customMovieService.toFavoritesMovies(movie);
	}

}
