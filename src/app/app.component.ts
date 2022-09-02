// La direttiva ngModel: 1way vs 2 way binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input
      type="text"
      placeholder="Add User name"
      [(ngModel)]="label"
    >
    <button (click)="add()">ADD</button>
    <span>{{label}}</span>
    <li *ngFor="let user of users">{{user}}</li>
  `
})
export class AppComponent {
  label: string = 'guest';
  users: string[] = [];

  add() {
    console.log(this.label);
    // Add to list
    this.users.push(this.label);
    this.label = '';
  }
}



// modifica all'esercizio con:
// < span > {{ label }}</>
