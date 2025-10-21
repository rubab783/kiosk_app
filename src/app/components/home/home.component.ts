import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CategoriesSidebarComponent } from '../categories-sidebar/categories-sidebar.component';
import { FoodGridComponent } from '../food-grid/food-grid.component';
import { FooterComponent } from '../footer/footer';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopBarComponent, 
    CategoriesSidebarComponent, FoodGridComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // keep same data you had
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
    { name: 'Zinger Steak Burger', image: 'assets/images/categories/classicburger.png', price: 12.45 },
    { name: 'Classic Steak Burger', image: 'assets/images/categories/classicburger.png', price: 12.45 },
    // add more as needed
  ];
}
