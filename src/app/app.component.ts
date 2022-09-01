import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="male">hello world</h1>
  `,
  styles: [`
    .male { color: blue }
    .female { color: pink }
  `]
})
export class AppComponent {

}