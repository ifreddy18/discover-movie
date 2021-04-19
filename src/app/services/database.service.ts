import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Movie, Television } from '../interfaces/browser-response';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

	constructor(private afDatabase: AngularFireDatabase) { }

	async createUser(user: Usuario): Promise<void> {

		let tempPhotoURL = null;

		if (user.photoURL) {
			tempPhotoURL = user.photoURL;
		}

		await this.afDatabase.object(`users/${user.uid}`).set({
			displayName: user.displayName,
			email: user.email,
			photoURL: tempPhotoURL
		})
		.then( () => console.log('SUCCESS: User save in database') )
		.catch( () => console.warn('ERROR: User don\'t save in database') );
	}

	saveFavoriteMovie(uid: string, movie: Movie): void {
		this.afDatabase.object(`users/${uid}/movies/${movie.id}`).set({
			id: movie.id,
			title: movie.title,
			poster_path:  movie.poster_path,
			vote_average: movie.vote_average,
			release_date: movie.release_date
		})
		.then( () => console.log('SUCCESS: Movie save in database') )
		.catch( () => console.warn('ERROR: Movie don\'t save in database') );
	}

	removeFavoriteMovie(uid: string, movie: Movie): void {
		this.afDatabase.object(`users/${uid}/movies/${movie.id}`).remove()
			.then( () => console.log('SUCCESS: Movie remove in database') )
			.catch( () => console.warn('ERROR: Movie don\'t remove in database') );
	}

	loadDatabaseMoviesId(uid: string): Observable<any> {
		return this.afDatabase.list(`users/${uid}/movies`).snapshotChanges();
	}

	loadDatabaseMovies(uid: string): Observable<any> {
		return this.afDatabase.list(`users/${uid}/movies`).valueChanges();
	}

	saveFavoriteTelevision(uid: string, tv: Television): void {
		this.afDatabase.object(`users/${uid}/television/${tv.id}`).set({
			id: tv.id,
			name: tv.name,
			poster_path:  tv.poster_path,
			vote_average: tv.vote_average,
		})
		.then( () => console.log('SUCCESS: Television save in database') )
		.catch( () => console.warn('ERROR: Television don\'t save in database') );
	}

	removeFavoriteTelevision(uid: string, tv: Television): void {
		this.afDatabase.object(`users/${uid}/television/${tv.id}`).remove()
			.then( () => console.log('SUCCESS: Television remove in database') )
			.catch( () => console.warn('ERROR: Television don\'t remove in database') );
	}

	loadDatabaseTelevisionId(uid: string): Observable<any> {
		return this.afDatabase.list(`users/${uid}/television`).snapshotChanges();
	}

	loadDatabaseTelevision(uid: string): Observable<any> {
		return this.afDatabase.list(`users/${uid}/television`).valueChanges();
	}


}

/*

  Data structure

  users:
    "uid": string
      "displayName": string
      "email": string
      "photoURL": string
      "movies":
        "id": number
        	"title": string
			"poster_path":  string
			"vote_average": string
			"release_date": date
      "television":
        "id": number
        	"name": string
			"poster_path":  string
			"vote_average": string



 */
