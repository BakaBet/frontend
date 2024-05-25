import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListematchComponent } from './listematch.component';

describe('ListematchComponent', () => {
  let component: ListematchComponent;
  let fixture: ComponentFixture<ListematchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListematchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
