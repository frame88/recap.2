import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [style.color]="user.gender === 'M' ? 'white' : null"
      [style.backgroundColor]="user.gender === 'M' ? 'blue' : 'pink'"
      [style.fontSize.px]="user.age"
    >{{user.name}}</li>
  `
})
export class AppComponent {
  users = [
    { id: 1, name: 'Fabio', gender: 'M', age: 30 },
    { id: 2, name: 'Lisa', gender: 'F', age: 20 },
    { id: 3, name: 'Lorenzo', gender: 'M', age: 10 },
    { id: 4, name: 'Silvia', gender: 'F', age: 130 }
  ];
}