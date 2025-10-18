import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-food-grid',
  standalone: true,
  imports: [CommonModule, FoodCardComponent],
  templateUrl: './food-grid.component.html',
  styleUrls: ['./food-grid.component.scss']
})
export class FoodGridComponent {
  @Input() foods: any[] = [];
}
