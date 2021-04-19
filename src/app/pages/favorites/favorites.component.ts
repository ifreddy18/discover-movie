import { Component } from '@angular/core';
import { CustomMoviesService } from '../../services/custom-movies.service';
import { Television, Movie } from '../../interfaces/browser-response';
import { AuthService } from '../../services/auth.service';
import { combineLatest } from 'rxjs';
import { DatabaseService } from '../../services/database.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

	displayList: string;
	likesMovies: Movie[];

	constructor(
		public customMovieSevice: CustomMoviesService,
		public authService: AuthService,
		public databaseService: DatabaseService
	) {

		// console.log(authService.userUid);
		// combineLatest(

		// 	this.databaseService.loadDatabaseMovies(authService.userUid),

		// ).subscribe(([likesMovies]) => {
		// 	console.log(likesMovies);
		// });
	}

}
