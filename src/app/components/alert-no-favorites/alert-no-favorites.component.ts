import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-no-favorites',
  templateUrl: './alert-no-favorites.component.html',
  styleUrls: ['./alert-no-favorites.component.css']
})
export class AlertNoFavoritesComponent implements OnInit {

  @Input() media: string;
  mediaName: string;
  message: string;

  constructor() { }

  ngOnInit(): void {

    if (this.media === 'tv') {
      this.mediaName = 'TV show';
    }
     
    if (this.media === 'movie') {
      this.mediaName = 'movie';
    }

    this.message = `You don't have any ${this.mediaName} in your lists yet!`;
  }

}
