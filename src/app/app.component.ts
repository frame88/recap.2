// ActivatedRoute e Router API

// esercizio che permette di passare tra un utente e l'altro tramite un
// button next

// con una mia piccola modifica che permette al ciclo di ricominciare,
// e quindi una volta arrivati all'utente 12° si riparte dal 1°. 
// Qualcosa non quadra però, perchè arrivati al 12° devo cliccare 3 volte
// per far ripartire il ciclo dall'inizio, e dopo i 3 click parte dal
// secondo users della lista, anzichè dal primo 
import { LocationStrategy } from '@angular/common';
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


