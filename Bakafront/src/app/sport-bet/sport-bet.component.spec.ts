import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBetComponent } from './sport-bet.component';

describe('SportBetComponent', () => {
  let component: SportBetComponent;
  let fixture: ComponentFixture<SportBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportBetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
