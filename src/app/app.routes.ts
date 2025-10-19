import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopbarToggleComponent } from './components/topbar-toggle/topbar-toggle';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home2', component: TopbarToggleComponent },
];
