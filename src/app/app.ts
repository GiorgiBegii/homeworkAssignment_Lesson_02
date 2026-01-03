import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceGame } from './dice-game/dice-game';

@Component({
  selector: 'app-root',
  imports: [DiceGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('homeworkAssignment_Lesson_02');
}
