import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditComponent } from './beer-edit.component';

describe('BeerEditComponent', () => {
  let component: BeerEditComponent;
  let fixture: ComponentFixture<BeerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
