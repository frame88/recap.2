// Eventi del router & RxJS operators

// console info di ogni routes, tramite i filter importati da rxjs

import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <div class="container text-center mt-5">
      <button routerLink="users">users button</button>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event) => {
        console.log((event as NavigationEnd).url);
      });
  }
}

