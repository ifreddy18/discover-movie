import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Params, Router } from '@angular/router';

// Interfaces
import { NowPlayingResponse, Movie, SearchMovieResponse, MovieDetail, Television, TelevisionDetail } from '../interfaces/browser-response';
import { Cast, MovieCredits } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private moviePage = 1;
  public cargando = false;

  constructor(private http: HttpClient,
              private router: Router) { }

  get params(): Params{
    return {
      api_key: '31a6bc7db6065e3950be71c893ffaf5f',
      language: 'en-US',
      page: this.moviePage.toString()
    };
  }

  resetMoviePages(): void {
    this.moviePage = 1;
  }

  getNowPlaying(): Observable<Movie[]>{

    if (this.cargando) { return of([]); }

    this.cargando = true;

    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp: NowPlayingResponse) => resp.results ),
      tap( () => {
        this.moviePage += 1;
        this.cargando = false;
      })
    );
  }

  buscarPelicula(query: string): Observable<Movie[]>{

    const queryParams = {
      ...this.params,
      page: '1',
      query // Si la variable tiene el mismo nombre de la propiedad, no se coloan :
    };

    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/search/movie`, {
      params: queryParams
    }).pipe(
      map( (resp: SearchMovieResponse) => resp.results),
      catchError( err => of(null)) // Se devuelve observable porque es lo que devuelve el metodo getCast
    );
  }

  getMovieDetails(movieId: string): Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${movieId}`, {
      params: this.params
    }).pipe(
      catchError( err => of(null)) // Se devuelve observable porque es lo que devuelve el metodo getCast
    );
  }

  getCast(movieId: string): Observable<Cast[]>{

    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${movieId}/credits?api_key=31a6bc7db6065e3950be71c893ffaf5f&language=en-US`)
                .pipe(
                  map( resp => {
                    console.log('Resp en service');
                    return resp.cast;
                  }),
                  catchError( err => of(null)) // Se devuelve observable porque es lo que devuelve el metodo getCast
                );
  }

  onMovieClick(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }

  onTelevisionClick(television: Television): void {
    this.router.navigate(['/tv', television.id]);
  }

  getTrendingMovie(): Observable<Movie[]> {

    if (this.cargando) { return of([]); }

    this.cargando = true;

    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/trending/movie/week`, {
      params: this.params
    }).pipe(
      map( (resp: SearchMovieResponse) => resp.results),
      tap( () => {
        this.moviePage += 1;
        this.cargando = false;
      }),
      catchError( err => of(null))
    );
  }

  getTrendingTelevision(): Observable<Television[]> {
    return this.http.get<SearchMovieResponse>(`${this.baseUrl}/trending/tv/week`, {
      params: this.params
    }).pipe(
      map( (resp: SearchMovieResponse) => resp.results),
      catchError( err => of(null))
    );
  }

  getTelevisionDetails(televisionId: string): Observable<TelevisionDetail>{
    return this.http.get<TelevisionDetail>(`${this.baseUrl}/tv/${televisionId}`, {
      params: this.params
    }).pipe(
      // map( resp => resp),
      catchError( err => of(null)) // Se devuelve observable porque es lo que devuelve el metodo getCast
    );
  }
}
