import { Component, Input, OnInit } from '@angular/core';
import { Season } from '../../interfaces/browser-response';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  @Input() seasons: Season[];

  accordionState: boolean[] = [];
  panelState: boolean[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.seasons = this.seasons.filter( season => season.name.toLowerCase() !== 'specials');

    for (let i = 0; i <= this.seasons.length; i++){
      this.accordionState[i] = false;
      this.panelState[i] = false;
    }

  }

  onClickAccordion(index: number): void {
    this.accordionState[index] = !this.accordionState[index];
    this.panelState[index] = !this.panelState[index];
  }

}
