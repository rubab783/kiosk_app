import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodGridComponent } from '../food-grid/food-grid.component';

@Component({
  selector: 'app-category-popup',
  standalone: true,
  imports: [CommonModule, FoodGridComponent],
  templateUrl: './categories-popup.html',
  styleUrls: ['./categories-popup.scss']
 })
export class CategoryPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  showPopup = false;

  categories = [
    { name: 'Burgers', icon: 'assets/images/categories/burger.png' },
    { name: 'Chinese', icon: 'assets/images/categories/chinese.png' },
    { name: 'Pizza', icon: 'assets/images/categories/pizza.png' },
    { name: 'Wraps', icon: 'assets/images/categories/wraps.png' },
    { name: 'Steaks', icon: 'assets/images/categories/steaks.png' },
    { name: 'Kids Meal', icon: 'assets/images/categories/kidsmeal.png' },
    { name: 'Coffee', icon: 'assets/images/categories/coffee.png' },
    { name: 'Ice Cream', icon: 'assets/images/categories/icecream.png' },
    { name: 'Beverages', icon: 'assets/images/categories/beverages.png' },
  ];

  foods = [
    { name: 'Zinger Burger', price: 450, image: 'assets/images/categories/classicburger.png' },
    { name: 'Fries', price: 150, image: 'assets/images/categories/classicburger.png' },
    { name: 'Cold Drink', price: 100, image: 'assets/images/categories/classicburger.png' },
    { name: 'Pizza Slice', price: 300, image: 'assets/images/categories/classicburger.png' },
  ];

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  close() {
    this.showPopup = false;
  }
}
