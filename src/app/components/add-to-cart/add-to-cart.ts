import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.html',
  styleUrls: ['./add-to-cart.scss']
})
export class AddToCartComponent {
  quantity: number = 1;

  increaseQty(): void {
    this.quantity++;
  }

  decreaseQty(): void {
   
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart(): void {
    this.quantity = 0;
  }
}
