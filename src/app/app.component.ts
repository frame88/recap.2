import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container text-center mt-5">
      <button class="m-5 p-3 rounded" (click)="goto('one')">one</button>
      <button class="m-5 p-3 rounded" (click)="goto('two')">two</button>
      <button class="m-5 p-3 rounded" (click)="goto('three')">three</button>
  
      <div [ngSwitch]="section">
        <div *ngSwitchCase="'one'">
          sce...
        </div>
        <div *ngSwitchCase="'two'">
          ...mochi...
        </div>
        <div *ngSwitchDefault>
          ...legge
        </div>
      </div>

    </div>
  `
})
export class AppComponent {
  section = 'one';

  goto(value: string) {
    this.section = value;
  }
}