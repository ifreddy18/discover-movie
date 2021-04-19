import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router) { }

	canActivate(): boolean {
		console.log('Guard Active');

		console.log(this.authService.userActive);

		if (this.authService.userActive) {
			this.router.navigateByUrl('profile');
			return false;
		} else {
			return true;
		}
	}

}
