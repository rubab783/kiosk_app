import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  categories = [
    { name: 'Burgers', icon: 'assets/images/categories/burger.png' },
    { name: 'Chinese', icon: 'assets/images/categories/chinese.png' },
    { name: 'Pizza', icon: 'assets/images/categories/pizza.png' },
    { name: 'Wraps', icon: 'assets/images/categories/wraps.png' },
    { name: 'Steak', icon: 'assets/images/categories/steaks.png' },
    { name: 'Kids Meal', icon: 'assets/images/categories/kidsmeal.png' },
  ];

  foods = [
    { name: 'Classic Chicken Burger', image: 'assets/images/categories/classicburger.png', price: 9.98 },
    { name: 'Grilled Chicken Burger', image: 'assets/images/categories/classicburger.png', price: 10.50 },
    { name: 'Zinger Burger', image: 'assets/images/categories/classicburger.png', price: 8.99 },
    { name: 'Beef Steak Burger', image: 'assets/images/categories/classicburger.png', price: 12.45 },
  ];
}
