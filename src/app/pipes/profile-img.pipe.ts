import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileImg'
})
export class ProfileImgPipe implements PipeTransform {

  transform(photoURL: string): string {

		if (photoURL) {
			return photoURL;
		} else {
			return './assets/no-user.png';
		}
	}

}
