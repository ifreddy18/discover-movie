import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

	name: string;
  	email: string;
	password: string;
	errorMsg: string;

	constructor(
		// public auth: AngularFireAuth,
		public authService: AuthService,
		public router: Router
	) { }

	async signupEmail(form: NgForm): Promise<void> {

		Object.values( form.controls ).forEach( control => {
			control.markAsTouched();
		});

		if (form.valid) {
			const signUpReturn = await this.authService.signupEmail(this.name, this.email, this.password);

			if (signUpReturn.length > 0) {
				this.errorMsg = signUpReturn;
			}

		}

	}

	loginGoogle(): void {
		this.authService.loginGoogle();
	}


}
