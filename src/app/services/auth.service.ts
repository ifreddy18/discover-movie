import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

// Interfaces
import { Usuario } from '../interfaces/usuario.interface';
import { DatabaseService } from './database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

	public currentUser: Usuario = {};
	public userActive = false;


	constructor(
		public afAuth: AngularFireAuth,
		public dbService: DatabaseService,
		public router: Router
	) {
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

	get userFirstName(): string {
		let firstName: string[] = [];

		if (this.currentUser.displayName) {
			firstName = this.currentUser.displayName.split(' ');
		}
		return firstName[0];
	}

	async signupEmail(name: string, email: string, password: string): Promise<string> {

		let errorMsg = '';

		await this.afAuth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				this.setCurrentUserByEmail(name, userCredential);
			})
			.catch((error) => {
				errorMsg = error.message;
			})
			.finally( () => {
				if (this.currentUser) {
					this.dbService.createUser(this.currentUser);
					this.router.navigateByUrl('/home');
				}
			});

		return errorMsg;

	}

	async loginEmail(email: string, password: string): Promise<string> {

		let errorMsg = '';

		await this.afAuth.signInWithEmailAndPassword(email, password)
				.then( result => {
					this.userActive = true;
					this.router.navigateByUrl('/home');
				})
				.catch( error => {
					errorMsg = error.message;
				});

		return errorMsg;

	}

	loginGoogle(): void {
		this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then( result => {
				this.setCurrentUserByGoogle(result);
			})
			.catch( error => console.warn({ error }))
			.finally( () => {
				if (this.currentUser) {
					this.dbService.createUser(this.currentUser);
					this.router.navigateByUrl('/home');
				}
			});
	}

  	logout(): void {
		this.afAuth.signOut()
			.then(() => {
				this.userActive = false;
				this.currentUser = { };
				this.router.navigateByUrl('home');
			})
			.catch((error) => {
				console.warn({ error });
			});
  	}

	setCurrentUserByEmail(name: string, userCredential): void {
		const user = userCredential.user;

		if (user !== null && user !== undefined) {
			this.currentUser.displayName = name;
			this.currentUser.email = user.email;
			this.currentUser.uid = user.uid;

			this.updateProfileName(name);

			this.userActive = true;
		} else {
			this.userActive = false;
		}
	}

	setCurrentUserByGoogle(userCredential): void {
		const user = userCredential.user;

		if (user !== null && user !== undefined) {
			this.currentUser.displayName = user.displayName;
			this.currentUser.email = user.email;
			this.currentUser.uid = user.uid;
			this.currentUser.photoURL = user.photoURL;

			this.userActive = true;
		} else {
			this.userActive = false;
		}
	}

	updateProfileName(displayName: string): void {
		firebase.auth().currentUser.updateProfile({ displayName })
			.then( () => {
				// location.reload();
			})
			.catch( err => console.warn(err));
	}

	// updateProfilePhoto(photoURL: string) {
	// 	firebase.auth().currentUser.updateProfile({ photoURL })
	// 						.then( () => {
	// 							this.currentUser.photoURL = photoURL;
	// 							location.reload();
	// 							console.log(firebase.auth().currentUser.photoURL);
	// 						})
	// 						.catch( err => console.warn(err));
	// }

	userStateChange(): void {
		// tslint:disable-next-line: deprecation
		this.afAuth.authState.subscribe(user => {

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
