// Passaggio parametri e ActivatedRoute

// esercizio che chiama una lista di nomi con relative info (user-details)
// se cliccati gli utenti restituiscono le informazioni
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


