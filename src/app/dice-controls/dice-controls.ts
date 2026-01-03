import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Roll } from '../../models/roll.model';

@Component({
  selector: 'app-dice-controls',
  imports: [],
  templateUrl: './dice-controls.html',
  styleUrl: './dice-controls.scss',
})
export class DiceControls {

  @Input() result!: Roll;
  @Output() roll = new EventEmitter<void>();

  onRoll(): void {
    this.roll.emit();
  }
}
