// Animated Collapsable Panel: trigger, style, state e animate
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">
      <app-animated-button (click)="active = 'one'" [selected]="active === 'one'">ONE</app-animated-button>
      <app-animated-button (click)="active = 'two'" [selected]="active === 'two'">TWO</app-animated-button>
      <app-animated-button (click)="active = 'three'" [selected]="active === 'three'">THREE</app-animated-button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  active = 'one';
}



