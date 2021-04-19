import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {

	guestInfo = {
		displayName: 'Guest',
		email: 'guest@discovermovie.com',
		password: '********'
	};
	constructor(
		public authService: AuthService,
	) {	}

	logout(): void {
		this.authService.logout();
	}


}
