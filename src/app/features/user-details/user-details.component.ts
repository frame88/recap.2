import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h1>{{user.name}}</h1>
      <h2>{{user.email}}</h2>
    </div>
    <button (click)="gotoNextUser()">Next</button>  
  `,
  styles: []
})

export class UserDetailsComponent {
  user: any; 
  id: number | null = null;

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient,
    private router: Router
  ) {
    activatedRoute.params
    .subscribe(params => {
      console.log(params['id']);
      this.id = +activatedRoute.snapshot.params['id'];
      http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .subscribe(res => {
          this.user = res;
        });
    });
  }

  gotoNextUser() {
    if (this.id == 12) {
      this.id = 1
    }

    if (this.id) {
      const nextId = this.id + 1;
      this.router.navigateByUrl(`users/${nextId}`);
    }
  }
}