// Navigation Bar

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="container text-center mt-5">
      <app-navbar></app-navbar>
      <hr>
      <!-- <button routerLink="/contacts">contacts</button>
      <button routerLink="/catalog">catalog</button> -->
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}


