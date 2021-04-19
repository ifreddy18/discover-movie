import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { combineLatest } from 'rxjs';
import { TelevisionDetail, Genre, Season, Television } from '../../interfaces/browser-response';
import { CustomMoviesService } from '../../services/custom-movies.service';

@Component({
	selector: 'app-television',
	templateUrl: './television.component.html',
	styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

	television: TelevisionDetail;
	genres: Genre[] = [];
	seasons: Season[] = [];
	firstYear: string;
	lastYear = '????';

	constructor(
		private activateRoute: ActivatedRoute,
		private movieService: MovieService,
		public customMovieService: CustomMoviesService,
		private router: Router,
		private location: Location) { }

	ngOnInit(): void {
		const { id } = this.activateRoute.snapshot.params;

		combineLatest(

			this.movieService.getTelevisionDetails(id),

		).subscribe(([television]) => {

			if (!television) {
				this.router.navigateByUrl('');
				return;
			}

			this.television = television;

			// Dates
			const firstAirDate = new Date(television.first_air_date);
			this.firstYear = firstAirDate.getFullYear().toString();

			if (television.next_episode_to_air === null) {
				const lastAirDate = new Date(television.last_air_date);
				this.lastYear = lastAirDate.getFullYear().toString();
			}

			// Genres
			if (television.genres.length > 0) {
				this.genres = television.genres;
			}

			// Seasons
			if (television.seasons.length > 0) {
				this.seasons = television.seasons;
			}

		});

	}

	goBack(): void {
		this.location.back();
	}

	toFavoritesTelevision(television: Television): void {
		this.customMovieService.toFavoritesTelevision(television);
	}

}
