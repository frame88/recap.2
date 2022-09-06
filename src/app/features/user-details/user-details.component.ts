import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h1>{{user.name}}</h1>
      <h2>{{user.email}}</h2>
    </div>
  `,
  styles: []
})

export class UserDetailsComponent {
  user: any; 

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient
  ) {
    const id = +activatedRoute.snapshot.params['id'];
    http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(res => {
        this.user = res;
      });
  }
}