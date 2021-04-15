import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {

	constructor(
		public authService: AuthService,
		public router: Router
	) {	}

	login(): void {
		this.authService.login();
	}

	logout(): void {
		this.authService.logout();
	}


}
