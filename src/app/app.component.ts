// Animated Collapsable Panel: trigger, style, state e animate
import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  animations: [
    trigger('collapsable', [
      state('opened', style ({
        height: '200px'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.83, 0, 0.17, 1)')
      ])
    ])
  ],
  template: `
    <div class="container-fluid">
      <div class="container text-center mt-5">
        <div class="card">
          <div class="card-header" (click)="toggle()">Titolo della card</div>
        <div class="card-body" style='overflow: hidden' [@collapsable]="state">
          With supporting text below as a natural lead-in to additional content.
        </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  state = 'opened';

  toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }
}



