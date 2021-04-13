import { Component, OnInit } from '@angular/core';
import { CustomMoviesService } from '../../services/custom-movies.service';
import { Television, Movie  } from '../../interfaces/browser-response';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  likesMovies: Movie[] = [];
  likesTelevision: Television[] = [];

  displayList: string;

  constructor(private customMovieSevice: CustomMoviesService) {
    this.likesMovies = this.customMovieSevice.likesMovies;
    this.likesTelevision = this.customMovieSevice.likesTelevision;
  }

  ngOnInit(): void {

  }

 


}
