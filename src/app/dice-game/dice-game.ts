import { Component, OnInit } from '@angular/core';
import { RollHistoryPipe } from '../pipes/roll-history.pipe';
import { Roll } from '../../models/roll.model';
import { DiceControls } from '../dice-controls/dice-controls';

@Component({
  selector: 'app-dice-game',
  imports: [DiceControls, RollHistoryPipe],
  templateUrl: './dice-game.html',
  styleUrl: './dice-game.scss',
})
export class DiceGame implements OnInit {

  currentRoll!: Roll;
  history: Roll[] = [];

  ngOnInit(): void {
    this.rollDice();
  }

  rollDice(): void {
    const dice1 = this.randomDice();
    const dice2 = this.randomDice();
    const sum = dice1 + dice2;

    this.currentRoll = {
      dice1,
      dice2,
      sum,
      isWin: sum === 7
    };

    this.history = [this.currentRoll, ...this.history];
  }

  private randomDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
