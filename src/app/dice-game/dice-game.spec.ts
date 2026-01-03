import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGame } from './dice-game';

describe('DiceGame', () => {
  let component: DiceGame;
  let fixture: ComponentFixture<DiceGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
