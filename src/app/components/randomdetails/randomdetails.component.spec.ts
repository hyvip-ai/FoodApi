import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomdetailsComponent } from './randomdetails.component';

describe('RandomdetailsComponent', () => {
  let component: RandomdetailsComponent;
  let fixture: ComponentFixture<RandomdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
