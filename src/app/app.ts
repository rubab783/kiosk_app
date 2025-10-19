import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopbarToggleComponent} from './components/topbar-toggle/topbar-toggle'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopbarToggleComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
