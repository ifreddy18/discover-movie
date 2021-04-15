import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Usuario } from '../../interfaces/usuario.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	currentUser;

	constructor(
		public auth: AngularFireAuth,
		public authService: AuthService,
		public router: Router
	) {
		console.log(this.currentUser);
		auth.onAuthStateChanged( (user) => {
			if (user) {
				router.navigateByUrl('profile');
			} else {
				// router.navigateByUrl('home');
			}
		} );
	}

	ngOnInit(): void {

	}

	test(): void {
		// tslint:disable-next-line: deprecation
		this.auth.user.subscribe(resp => {
			console.log(resp);
		});

	}

	signUp(email: string, password: string): void {
		// this.authService.signUp(email, password);
	}

	login(): void {
		this.authService.login();
	}

	logout(): void {
		this.authService.logout();
		this.currentUser = null;
		this.router.navigateByUrl('home');
	}

}
