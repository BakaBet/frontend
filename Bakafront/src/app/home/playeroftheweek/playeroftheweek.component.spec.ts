import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeroftheweekComponent } from './playeroftheweek.component';

describe('PlayeroftheweekComponent', () => {
  let component: PlayeroftheweekComponent;
  let fixture: ComponentFixture<PlayeroftheweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayeroftheweekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayeroftheweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
