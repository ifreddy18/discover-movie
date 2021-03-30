import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonName'
})
export class SeasonNamePipe implements PipeTransform {

  transform(seasonName: string, seasonNumber: number): string {
    let result = `Season ${seasonNumber + 1}`;

    if (seasonName.toLowerCase() !== result.toLowerCase()){
      result = `Season ${seasonNumber + 1}: ${seasonName}`;
    }

    return result;
  }

}
