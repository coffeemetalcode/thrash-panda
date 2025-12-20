import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Book } from './components/book/book';
import { Merch } from './components/merch/merch';
import { Live } from './components/live/live';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'book', component: Book },
  { path: 'merch', component: Merch },
  { path: 'live', component: Live }
];
