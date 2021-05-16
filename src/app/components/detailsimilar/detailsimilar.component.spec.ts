import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsimilarComponent } from './detailsimilar.component';

describe('DetailsimilarComponent', () => {
  let component: DetailsimilarComponent;
  let fixture: ComponentFixture<DetailsimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsimilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
