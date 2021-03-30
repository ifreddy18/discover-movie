import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string, width?: string): string {

    // width permitidos: 200 / 300 / 400 / 500 / original
    let size = 'w500';

    if (width !== undefined){

      size = `w${width}`;

      if (width === 'original'){
        size = width;
      }

    }

    if (poster){
      return `https://image.tmdb.org/t/p/${size}${poster}`;
    } else {
      return './assets/no-image.jpg';
    }
  }

}
