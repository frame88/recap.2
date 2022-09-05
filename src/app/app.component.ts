// AngularCLI ei il modulo AppRoutingModule

import { Component } from '@angular/core';


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

}


