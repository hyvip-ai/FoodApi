import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnutriComponent } from './detailnutri.component';

describe('DetailnutriComponent', () => {
  let component: DetailnutriComponent;
  let fixture: ComponentFixture<DetailnutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
