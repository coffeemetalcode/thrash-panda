import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {
  protected readonly logoUrl = signal('assets/img/thrash-panda.svg');
  protected readonly logoAltText = signal('Thrash Panda');
}
