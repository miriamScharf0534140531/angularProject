import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    return Math.floor(value/60)>0?`${Math.floor(value/60)} hours, ${value%60} minutes`:`${value%60} minutes`;
  }
}
