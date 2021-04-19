import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, SearchMovieResponse, Television } from '../interfaces/browser-response';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
	providedIn: 'root'
})
export class CustomMoviesService {

	private baseUrl = 'https://api.themoviedb.org/3';
	likesMovies: Movie[] = [];
	likesTelevision: Television[] = [];
	likesMoviesId: number[] = [];
	likesTelevisionId: number[] = [];
	likesMoviesId$; likesMovies$; likesTelevisionId$; likesTelevision$;

	constructor(
		private http: HttpClient,
		private authService: AuthService,
		private dbService: DatabaseService,
	) {
		this.userStateChange();
	}

	get params(): Params {
		return {
			api_key: '31a6bc7db6065e3950be71c893ffaf5f',
			language: 'en-US',
			page: '1'
		};
	}

	toFavoritesMovies(movie: Movie): void {

		if (this.authService.userActive) {

			if (!this.likesMoviesId.includes(movie.id)) {
				this.dbService.saveFavoriteMovie(this.authService.userUid, movie);
				return;
			}

			this.dbService.removeFavoriteMovie(this.authService.userUid, movie);

		} else {

			if (!this.likesMoviesId.includes(movie.id)) {
				this.likesMovies.push(movie);
			} else {
				this.likesMovies.splice(this.likesMovies.indexOf(movie), 1);
			}

			this.saveStorage();
			this.likesMoviesId = this.likesMovies.map(movieId => movieId.id);
		}

	}

	toFavoritesTelevision(television: Television): void {

		if (this.authService.userActive) {

			if (!this.likesTelevisionId.includes(television.id)) {
				this.dbService.saveFavoriteTelevision(this.authService.userUid, television);
				return;
			}

			this.dbService.removeFavoriteTelevision(this.authService.userUid, television);

		} else {

			if (!this.likesTelevisionId.includes(television.id)) {
				this.likesTelevision.push(television);
			} else {
				this.likesTelevision.splice(this.likesTelevision.indexOf(television), 1);
			}

			this.saveStorage();
			this.likesTelevisionId = this.likesTelevision.map(movieId => movieId.id);
		}

	}


	saveStorage(): void {
		localStorage.setItem('likesMovies', JSON.stringify(this.likesMovies));
		localStorage.setItem('likesTelevision', JSON.stringify(this.likesTelevision));
		console.log('saveStorage');
	}

	loadStorage(): void {
		if (localStorage.getItem('likesMovies')) {
			this.likesMovies = JSON.parse(localStorage.getItem('likesMovies'));
		}

		if (localStorage.getItem('likesTelevision')) {
			this.likesTelevision = JSON.parse(localStorage.getItem('likesTelevision'));
		}

		this.likesMoviesId = this.likesMovies.map(movie => movie.id);
		this.likesTelevisionId = this.likesTelevision.map(television => television.id);

	}

	loadDatabase(uid: string): void {
		// For display Favorites Icons
		this.loadDatabaseMoviesId(uid);
		this.loadDatabaseTelevisionId(uid);

		// For display Favorites in Favorite's Page
		this.loadDatabaseMovies(uid);
		this.loadDatabaseTelevision(uid);

	}

	loadDatabaseMoviesId(uid: string): void {
		// tslint:disable-next-line: deprecation
		this.likesMoviesId$ = this.dbService.loadDatabaseMoviesId(uid).subscribe(data => {
			// tslint:disable-next-line: radix
			this.likesMoviesId = data.map(item => Number.parseInt(item.key));
		});
	}

	loadDatabaseTelevisionId(uid: string): void {
		// tslint:disable-next-line: deprecation
		this.likesTelevisionId$ = this.dbService.loadDatabaseTelevisionId(uid).subscribe(data => {
			// tslint:disable-next-line: radix
			this.likesTelevisionId = data.map(item => Number.parseInt(item.key));
		});
	}

	loadDatabaseMovies(uid: string): void {
		// tslint:disable-next-line: deprecation
		this.likesMovies$ = this.dbService.loadDatabaseMovies(uid).subscribe( data => {
			this.likesMovies = data;
		});
	}

	loadDatabaseTelevision(uid: string): void {
		// tslint:disable-next-line: deprecation
		this.likesTelevision$ = this.dbService.loadDatabaseTelevision(uid).subscribe( data => {
			this.likesTelevision = data;
		});
	}

	/**
	 * @param mediaType : 'tv' or 'movie'
	 * @param id : tv or movie id
	 * @returns tv[] or movie []
	 */
	getRecommendation(mediaType: string, id: number): Observable<Television[] | Movie[]> {
		mediaType = mediaType.toLowerCase();

		if (mediaType !== 'tv' && mediaType !== 'movie') { return of([]); }

		return this.http.get<SearchMovieResponse>(`${this.baseUrl}/${mediaType}/${id}/recommendations`, {
			params: this.params
		}).pipe(
			map((resp: SearchMovieResponse) => resp.results)
		);
	}

	userStateChange(): void {
		// tslint:disable-next-line: deprecation
		this.authService.afAuth.authState.subscribe(user => {

			if (user) {
				this.authService.userActive = true;
				this.loadDatabase(user.uid);
				return;
			}

			this.authService.userActive = false;
			this.loadStorage();

		}, err => {
			console.warn(err);
		});

	}

}
