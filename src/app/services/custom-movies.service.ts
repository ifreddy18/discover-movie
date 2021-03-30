import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, SearchMovieResponse, Television } from '../interfaces/browser-response';

@Injectable({
  providedIn: 'root'
})
export class CustomMoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  likesMovies: Movie[] = [];
  likesMoviesId: number[] = [];
  likesTelevision: Television[] = [];
  likesTelevisionId: number[] = [];

  constructor(private http: HttpClient) {
    this.loadStorage();
  }

  get params(): Params{
    return {
      api_key: '31a6bc7db6065e3950be71c893ffaf5f',
      language: 'en-US',
      page: '1'
    };
  }

  toFavoritesMovies(movie: Movie): void {

    if (!this.likesMoviesId.includes(movie.id)) {
      this.likesMovies.push(movie);
      console.log(`${movie.title} fue agregada a favoritos`);
    } else {
      this.likesMovies.splice(this.likesMovies.indexOf(movie), 1);
      console.log(`${movie.title} fue removida de favoritos`);
    }

    this.saveStorage();
    this.likesMoviesId = this.likesMovies.map( movieid => movieid.id);

  }

  toFavoritesTelevision(television: Television): void {

    if (!this.likesTelevisionId.includes(television.id)) {
      this.likesTelevision.push(television);
      console.log(`${television.name} fue agregada a favoritos`);
    } else {
      this.likesTelevision.splice(this.likesTelevision.indexOf(television), 1);
      console.log(`${television.name} fue removida de favoritos`);
    }

    this.saveStorage();
    this.likesTelevisionId = this.likesTelevision.map( televisionId => televisionId.id);

  }


  saveStorage(): void {
    localStorage.setItem('likesMovies', JSON.stringify(this.likesMovies));
    localStorage.setItem('likesTelevision', JSON.stringify(this.likesTelevision));
    console.log('saveStorage');
  }

  loadStorage(): void {
    if (localStorage.getItem('likesMovies')){
      this.likesMovies = JSON.parse(localStorage.getItem('likesMovies'));
    }

    if (localStorage.getItem('likesTelevision')){
      this.likesTelevision = JSON.parse(localStorage.getItem('likesTelevision'));
    }

    this.likesMoviesId = this.likesMovies.map( movie => movie.id);
    this.likesTelevisionId = this.likesTelevision.map( television => television.id);

    console.log('loadStorage');

  }


  /**
   * @param mediaType : 'tv' or 'movie'
   * @param id : tv or movie id
   * @returns tv[] or movie []
   */
  getRecommendation(mediaType: string, id: number ): Observable<Television[]|Movie[]>{
    mediaType = mediaType.toLowerCase();

    if (mediaType !== 'tv' && mediaType !== 'movie') { return of([]); }

    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/${mediaType}/${id}/recommendations`, {
      params: this.params
    }).pipe(
      map( (resp: SearchMovieResponse) => resp.results)
    );
  }

  existInFavorite(mediaTipe: string, id: number): boolean {
    let exist = false;

    if (mediaTipe === 'tv'){
      exist = this.likesTelevisionId.includes(id);
    }

    if (mediaTipe === 'movie'){
      exist = this.likesMoviesId.includes(id);
    }

    return exist;

  }

}
