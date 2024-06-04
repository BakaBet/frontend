import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecurrentbetuserComponent } from './listecurrentbetuser.component';

describe('ListecurrentbetuserComponent', () => {
  let component: ListecurrentbetuserComponent;
  let fixture: ComponentFixture<ListecurrentbetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListecurrentbetuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListecurrentbetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
