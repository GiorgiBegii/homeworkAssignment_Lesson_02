import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceControls } from './dice-controls';

describe('DiceControls', () => {
  let component: DiceControls;
  let fixture: ComponentFixture<DiceControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
