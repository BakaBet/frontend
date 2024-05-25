import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosegameComponent } from './choosegame.component';

describe('ChoosegameComponent', () => {
  let component: ChoosegameComponent;
  let fixture: ComponentFixture<ChoosegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosegameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
