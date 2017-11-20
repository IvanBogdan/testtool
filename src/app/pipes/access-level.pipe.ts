import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'accessLevel'
})
export class AccessLevelPipe implements PipeTransform {

  transform(value: number | string): string {
    switch (value) {
      case 0:
      case '0':
        return 'Администратор';
      case 1:
      case '1':
        return 'Оператор';
      default:
        return 'Unknown Role';
    }
  }

}
