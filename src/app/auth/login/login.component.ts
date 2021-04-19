import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	email: string;
	password: string;
	errorMsg: string;

	constructor(
		public authService: AuthService,
		public router: Router
	) { }

	async loginEmail(form: NgForm): Promise<void> {

		Object.values( form.controls ).forEach( control => {
			control.markAsTouched();
		});

		if (form.valid) {

			const loginEmailReturn = await this.authService.loginEmail(this.email, this.password);

			if (loginEmailReturn.length > 0) {
				this.errorMsg = loginEmailReturn;
			}

		}

	}

	loginGoogle(): void {
		this.authService.loginGoogle();
	}

	signUp(): void {
		this.router.navigateByUrl('signup');
	}


}
