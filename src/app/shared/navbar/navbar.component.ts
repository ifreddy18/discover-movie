import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	userActive = false;

	constructor(
		public router: Router,
		public authService: AuthService
	) { }

	buscarPelicula(query: string): void {

		query = query.trim();

		if (query.length === 0) { return; }

		this.router.navigate(['/search', query]);

	}

	signIn(): void {
		this.authService.login();
	}

	logout(): void {
		this.authService.logout();
		this.router.navigateByUrl('/home');
	}

}
