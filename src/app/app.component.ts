// Input, "template reference variables", keyboard events
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid mt-5 pt-5">
      <div class="container text-center">
        <input
          type="text"
          #inputName
          placeholder="Inserisci qualcosa"
          (keyup.enter)="addUser(inputName)"
        >
        <button (click)="addUser(inputName)">Save</button>
        <!-- <button (click)="remove(user)" class="bg-danger text-light">Remove</button> -->
        
        <li *ngFor="let user of users">{{user}}</li>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  users: string[] = [];

  addUser(input: HTMLInputElement) {
    this.users.push(input.value);
    input.value = '';
    input.focus();
  }

  // remove(user: string) {
  //   console.log('remove work\n');
  //   const index = this.users.indexOf(user);
  //   this.users.splice(index, 1);
  // }


  //Tentativo di creare segeuentemente al button Save, uno che faccia l'opposto.
  // Come nell'esercizio qui eseguito: https://github.com/frame88/recap.2/commit/967dbd4973a7b3f2b4dafaa7250be30df495aaca
  // l'ipotesi è che non riesca a rimuovere nulla poichè a differenza del codice proprio, qui abbiamo una lista (users) in continua
  // espansione.
  // Quindi il numero di iterazioni del for viene continuamente aggiornato, e il remove non sa dove parare (?)
}