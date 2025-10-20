import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details-empty',
  standalone:true,
  templateUrl: './order-details-empty.html',
  styleUrls: ['./order-details-empty.scss']
})
export class OrderDetailsEmptyComponent {
  constructor(private router: Router) {}

  goToMenu(): void {
    this.router.navigate(['/menu']); // adjust route as needed
  }
}
