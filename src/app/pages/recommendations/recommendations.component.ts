import { Component, OnInit } from '@angular/core';
import { CustomMoviesService } from '../../services/custom-movies.service';
import { Television, Movie  } from '../../interfaces/browser-response';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  randomMovies: Movie[] = [];
  randomTv: Television[] = [];

  displayList: string;

  recommendationCount = 10;

  constructor(private customMovieSevice: CustomMoviesService) {

  }

  ngOnInit(): void {

    this.setRandoms(this.customMovieSevice.likesMovies, this.randomMovies);
    this.setRandoms(this.customMovieSevice.likesTelevision, this.randomTv);

  }

  setRandoms(likeMedia: Movie[] | Television[], randomMedia: Movie[] | Television[]): void {

    let max = likeMedia.length;
    let item;

    if (likeMedia.length > this.recommendationCount) { max = this.recommendationCount; }

    while (randomMedia.length < max) {
      item = this.getRandomItems(likeMedia);

      if (!randomMedia.includes(item)){
        randomMedia.push(item);
      }

    }

  }

  getRandomItems(array: Array<any>): any {
    return array[Math.floor(Math.random() * array.length)];
  }

}
