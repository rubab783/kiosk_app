import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPopupComponent } from './components/categories-popup/categories-popup';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart';
import { OrderDetailsEmptyComponent } from './components/order-details-empty/order-details-empty';
import { OrderDetailsItemsComponent } from './components/order-details/order-details';
import { FoodGridComponent } from './components/food-grid/food-grid.component';
import {HomeComponent} from './components/home/home.component';
import {TopbarToggleComponent} from './components/topbar-toggle/topbar-toggle';
import {CategoriesSidebarComponent} from './components/categories-sidebar/categories-sidebar.component';
import { FooterComponent } from './components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryPopupComponent, 
           AddToCartComponent,OrderDetailsEmptyComponent,
           OrderDetailsItemsComponent,FoodGridComponent,
           HomeComponent,TopbarToggleComponent,
           CategoriesSidebarComponent,FooterComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
