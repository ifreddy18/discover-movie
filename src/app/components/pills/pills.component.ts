import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.css']
})
export class PillsComponent implements OnInit {

  @Output() displayList = new EventEmitter<string>();
  showList = 'movie';

  constructor() { }

  ngOnInit(): void {
    this.displayList.emit(this.showList);
  }

  activeList(media: string): void {
    this.displayList.emit(media);
    this.showList = media;
  }

}
