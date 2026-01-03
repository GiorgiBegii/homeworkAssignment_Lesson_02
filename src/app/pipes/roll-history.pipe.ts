import { Pipe, PipeTransform } from '@angular/core';
import { Roll } from '../../models/roll.model';

@Pipe({
  name: 'rollHistory',
  standalone: true,
  pure: true
})
export class RollHistoryPipe implements PipeTransform {

  transform(history: Roll[]): string {
    return history
      .map(roll => `[${roll.dice1},${roll.dice2}]`)
      .join(' ');
  }
}
