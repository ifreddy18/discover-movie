import { Component, OnInit } from '@angular/core';
import { CustomMoviesService } from '../../services/custom-movies.service';
import { Television, Movie, MediaType } from '../../interfaces/browser-response';
import { interval } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  likesMovies: Movie[] = [];
  likesTelevision: Television[] = [];

  randomMovies: Movie[] = [];
  randomTv: Television[] = [];

  constructor(private customMovieSevice: CustomMoviesService) {
    this.likesMovies = this.customMovieSevice.likesMovies;
    this.likesTelevision = this.customMovieSevice.likesTelevision;
  }

  ngOnInit(): void {
    this.setRandoms(this.likesMovies, this.randomMovies);
    this.setRandoms(this.likesTelevision, this.randomTv);
  }

  setRandoms(likeMedia: Movie[] | Television[], randomMedia: Movie[] | Television[]): void {
    let max = likeMedia.length;
    let item;

    if (likeMedia.length > 3) { max = 3; }

    while (randomMedia.length < max) {
      item = this.getRandomItems(likeMedia);

      // if (!this.randomMedia.some( tv => tv.id === item.id)){
      if (!randomMedia.includes(item)){
        randomMedia.push(item);
      }
      console.log(randomMedia);
    }

  }

  getRandomItems(array: Array<any>): any {
    return array[Math.floor(Math.random() * (array.length - 1))];
  }



}
