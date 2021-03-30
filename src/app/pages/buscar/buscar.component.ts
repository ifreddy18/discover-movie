import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/browser-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  query: string;
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {

      this.query = params.texto;

      this.movieService.buscarPelicula(this.query).subscribe( movies => {
        this.movies = movies;
      });
    });
  }

}
