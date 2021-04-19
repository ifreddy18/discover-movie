import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { OverviewPipe } from './overview.pipe';
import { SeasonNamePipe } from './season-name.pipe';
import { ProfileImgPipe } from './profile-img.pipe';

@NgModule({
	declarations: [
		PosterPipe,
		OverviewPipe,
		SeasonNamePipe,
		ProfileImgPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		PosterPipe,
		OverviewPipe,
		SeasonNamePipe,
		ProfileImgPipe
	]
})
export class PipesModule { }
