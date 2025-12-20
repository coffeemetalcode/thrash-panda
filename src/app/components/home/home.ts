import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly logoUrl = signal('assets/img/thrash-panda.svg');
  protected readonly logoAltText = signal('Thrash Panda');
}
