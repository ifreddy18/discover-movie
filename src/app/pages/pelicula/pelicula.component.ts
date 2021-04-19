import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';
import { Movie, MovieDetail } from 'src/app/interfaces/browser-response';
import { Cast } from 'src/app/interfaces/credits-response';
import { combineLatest } from 'rxjs';
import { CustomMoviesService } from 'src/app/services/custom-movies.service';

@Component({
	selector: 'app-pelicula',
	templateUrl: './pelicula.component.html',
	styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

	movie: MovieDetail;
	// inFavorite = false;
	cast: Cast[] = [];

	constructor(
		private activateRoute: ActivatedRoute,
		private movieService: MovieService,
		public customMovieService: CustomMoviesService,
		private router: Router,
		private location: Location) { }

	ngOnInit(): void {
		const { id } = this.activateRoute.snapshot.params;

		// tslint:disable-next-line: deprecation
		combineLatest(

			this.movieService.getMovieDetails(id),
			this.movieService.getCast(id),

		// tslint:disable-next-line: deprecation
		).subscribe(([movie, cast]) => {

			if (!movie) {
				this.router.navigateByUrl('');
				return;
			}

			this.movie = movie;
			// this.existInFavorite();

			if (!cast) { return; }

			this.cast = cast.filter(actor => actor.profile_path !== null);


		});

	}

	goBack(): void {
		this.location.back();
	}

	toFavoritesMovies(movie: Movie): void {
		this.customMovieService.toFavoritesMovies(movie);
	}

	// toFavorite(movie: Movie): void {
	// 	this.customMovieService.toFavoritesMovies(movie);
	// 	this.existInFavorite();
	// }

	// existInFavorite(): void {
	// 	this.inFavorite = this.customMovieService.existInFavorite('movie', this.movie.id);
	// }
}
