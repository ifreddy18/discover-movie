import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { OverviewPipe } from './overview.pipe';
import { SeasonNamePipe } from './season-name.pipe';



@NgModule({
  declarations: [
    PosterPipe,
    OverviewPipe,
    SeasonNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PosterPipe,
    OverviewPipe,
    SeasonNamePipe
  ]
})
export class PipesModule { }
