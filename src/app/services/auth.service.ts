import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

// Interfaces
import { Usuario, UsuarioProviderData } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { PeliculasPosterGridComponent } from '../components/peliculas-poster-grid/peliculas-poster-grid.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

	public currentUser: any = {};
	public userActive = false;


	constructor(
		public afAuth: AngularFireAuth,
		public router: Router
	) {
		console.log('Servicio iniciado');

		this.userStateChange();
	}

	get userDisplayName(): string {
		return this.currentUser.displayName;
	}

	get userEmail(): string {
		return this.currentUser.email;
	}

	get userPhoto(): string {
		return this.currentUser.photoURL;
	}


	get userUid(): string {
		return this.currentUser.uid;
	}

	set displayName(name: string) {
		this.currentUser.displayName = name;
	}

	// signUp(email: string, password: string): void {
	// 	this.afAuth.createUserWithEmailAndPassword(email, password)
	// 		.then((userCredential) => {
	// 			console.log(userCredential.user);
	// 		})
	// 		.catch((error) => {
	// 			console.warn(error);
	// 		});
	// }

	login(): void {
		this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
				.then( result => this.userActive = true )
				.catch( error => console.warn({ error }));
	}


  	logout(): void {
		this.afAuth.signOut()
			.then(() => {
				console.log('SignOut success');
				this.userActive = false;
				this.currentUser = {};
				this.router.navigateByUrl('home');
			})
			.catch((error) => {
				console.warn({ error });
			});
  	}

	userStateChange(): void {
		// tslint:disable-next-line: deprecation
		this.afAuth.authState.subscribe(user => {
			console.log('authState');
			console.log({user});

			if (user !== null && user !== undefined) {
				this.currentUser.displayName = user.displayName;
				this.currentUser.email = user.email;
				this.currentUser.photoURL = user.photoURL;
				this.currentUser.uid = user.uid;

				this.userActive = true;
			} else {
				this.userActive = false;
			}

		}, err => {
			console.warn(err);
		});
	}


}
