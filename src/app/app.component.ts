import { Component } from '@angular/core';
 
@Component({
   template: `
   <li
     *ngFor="let user of users"
     [ngStyle]="getStyle(user)"
   >{{user.name}}</li>
 `
})
export class AppComponent {
   users: User[] = [
       { id: 1, name: 'Fabio', age: 30, gender: 'M' },
       { id: 2, name: 'Lisa', age: 20, gender: 'F' },
       { id: 3, name: 'Lorenzo', age: 10, gender: 'M' },
       { id: 4, name: 'Silvia', age: 130, gender: 'F' }
   ];
 
   getStyle(user:User) {
       return {
           backgroundColor: user.gender === 'M' ? 'black' : 'grey',
           color: user.gender === 'M' ? 'blue' : 'pink',
           fontSize: `${user.age}px`
       };
   }
}
 
interface User {
   id: number,
   name: string,
   gender: string,
   age: number,
}