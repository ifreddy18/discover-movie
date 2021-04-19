import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
	]
})
export class AuthModule { }
