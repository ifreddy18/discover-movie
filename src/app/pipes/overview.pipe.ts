import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(overview: string): string {
    let result = 'Overview unavailable.';

    if (overview.length > 0){
      result = overview;
    }

    return result;
  }

}
