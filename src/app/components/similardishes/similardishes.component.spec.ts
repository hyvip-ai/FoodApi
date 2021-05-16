import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilardishesComponent } from './similardishes.component';

describe('SimilardishesComponent', () => {
  let component: SimilardishesComponent;
  let fixture: ComponentFixture<SimilardishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilardishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilardishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
