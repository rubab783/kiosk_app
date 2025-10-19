import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPopup } from './categories-popup';

describe('CategoriesPopup', () => {
  let component: CategoriesPopup;
  let fixture: ComponentFixture<CategoriesPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
