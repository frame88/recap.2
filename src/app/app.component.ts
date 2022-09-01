// Versione 1
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [ngClass]="{
        'male': user.gender === 'M',
        'female': user.gender === 'F'
      }"
    >{{user.name}}</li>
  `,
  styles: [`
    .male { background-color: blue; color: white}
    .female { background-color: pink }
  `]
})
export class AppComponent {
  users = [
    { id: 1, name: 'Fabio', gender: 'M' },
    { id: 2, name: 'Lisa', gender: 'F' },
    { id: 3, name: 'Lorenzo', gender: 'M' },
    { id: 4, name: 'Silvia', gender: 'F' }
  ];
}