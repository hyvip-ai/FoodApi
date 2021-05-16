import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynutritionComponent } from './bynutrition.component';

describe('BynutritionComponent', () => {
  let component: BynutritionComponent;
  let fixture: ComponentFixture<BynutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BynutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BynutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
