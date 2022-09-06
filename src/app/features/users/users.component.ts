import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <li *ngFor="let user of users" [routerLink]="['/users', user.id]">
      {{user.name}}
    </li>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any[] = [];

  constructor(http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => this.users = res);
   }

  ngOnInit(): void {
  }

}
