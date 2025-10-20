import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsEmpty } from './order-details-empty';

describe('OrderDetailsEmpty', () => {
  let component: OrderDetailsEmpty;
  let fixture: ComponentFixture<OrderDetailsEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsEmpty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsEmpty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
