import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid d-flex justify-content-center">
      <div class="container">
        <li *ngFor="let nome of listanomi; let i = index; let dispari = odd;">
          <span class="fs-3 m-3">{{i}} {{nome}}</span>
          <button class="bg-danger text-light" (click)="remove(nome)">remove</button>
        </li>
      </div>
    </div>
  `,
  styles: [`li{list-style-type: none;}`]
})
export class AppComponent {
  title = 'recap.2';


  listanomi = ['piero', 'franco', 'mario', 'marco','lucio'];

  remove(nome: string) {
    console.log('remove work\n');
    const index = this.listanomi.indexOf(nome);
    this.listanomi.splice(index, 1);
  }
}
