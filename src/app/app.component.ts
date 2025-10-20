import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPopupComponent } from './components/categories-popup/categories-popup';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart';
import { OrderDetailsEmptyComponent } from './components/order-details-empty/order-details-empty';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryPopupComponent, AddToCartComponent,OrderDetailsEmptyComponent], // ✅ okay now
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
