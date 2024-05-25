import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommingmatchesComponent } from './incommingmatches.component';

describe('IncommingmatchesComponent', () => {
  let component: IncommingmatchesComponent;
  let fixture: ComponentFixture<IncommingmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncommingmatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncommingmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
