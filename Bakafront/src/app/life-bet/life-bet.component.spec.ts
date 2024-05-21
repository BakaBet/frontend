import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeBetComponent } from './life-bet.component';

describe('LifeBetComponent', () => {
  let component: LifeBetComponent;
  let fixture: ComponentFixture<LifeBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeBetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
