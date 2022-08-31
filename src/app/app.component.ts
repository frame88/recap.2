import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li *ngFor="let nome of listanomi; let i = index; let dispari = odd;">
      <h1>{{i}} {{nome}}</h1>
      <hr *ngIf="dispari">
    </li>
  `,
  styles: [`li{list-style-type: none;}`]
})
export class AppComponent {
  title = 'recap.2';


  listanomi = ['piero', 'franco', 'mario', 'marco','lucio'];
}
