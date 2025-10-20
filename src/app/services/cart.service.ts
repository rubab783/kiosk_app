import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedFoodSource = new BehaviorSubject<any>(null);
  selectedFood$ = this.selectedFoodSource.asObservable();

  setSelectedFood(food: any) {
    this.selectedFoodSource.next(food);
  }

  clearSelectedFood() {
    this.selectedFoodSource.next(null);
  }
}
