import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarToggle } from './topbar-toggle';

describe('TopbarToggle', () => {
  let component: TopbarToggle;
  let fixture: ComponentFixture<TopbarToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
