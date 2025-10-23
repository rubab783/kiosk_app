import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './order-details.html',
  styleUrls: ['./order-details.scss']
})
export class OrderDetailsItemsComponent {
  cartItems = [
    {
      name: 'Classic chicken burger',
      color: 'Brown',
      size: 'S',
      quantity: 4,
      price: 5.49,
      image: 'assets/images/categories/classicburger.png'
    },
    {
      name: 'Classic chicken burger',
      color: 'Brown',
      size: 'S',
      quantity: 4,
      price: 5.49,
      image: 'assets/images/categories/classicburger.png'
    },
    {
      name: 'Classic chicken burger',
      color: 'Brown',
      size: 'S',
      quantity: 4,
      price: 5.49,
      image: 'assets/images/categories/classicburger.png'
    },
    {
      name: 'Classic chicken burger',
      color: 'Brown',
      size: 'S',
      quantity: 4,
      price: 5.49,
      image: 'assets/images/categories/classicburger.png'
    }
  ];

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  tax = 20.0;

  get total() {
    return this.subtotal + this.tax;
  }

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}
