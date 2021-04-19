import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module
import { PipesModule } from '../pipes/pipes.module';

// Components
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
	NavbarComponent,
	FooterComponent
  ],
  imports: [
	CommonModule,
	RouterModule,
  PipesModule
  ],
  exports: [
	NavbarComponent,
	FooterComponent
  ]
})
export class SharedModule { }
