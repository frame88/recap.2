import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('selected', style({
        borderColor: 'white',
        backgroundColor: 'orange',
        transform: 'scale(1.3) rotate(-10deg)'
      })),
      state('over', style({
        transform: 'scale(1.3) rotate(20deg)'
      })),
      state('out', style({
        transform: 'scale(1) rotate(0)'
      })),
      transition('out <=> over', [
        // https://easings.net/
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)')  // cubic
      ]),
      transition('* <=> selected', [
        // https://easings.net/
        animate('0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)') // back
      ])
    ])
  ],
  template: `
    <button
      class="button"
      [disabled]="selected"
      [@buttonAnimated]="state"
      (mouseover)="state = 'over'"
      (mouseout)="leaveHandler()"
    > <ng-content></ng-content> </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges {
  @Input() selected: boolean = false;  // fix for strict mode
  state = 'out';

  ngOnChanges(changes: SimpleChanges) {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    this.state = changes['selected'].currentValue ? 'selected' : 'out';
  }

  leaveHandler() {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    // impostiamo lo stato ad 'out' al mouseout solo se l'elemento non è selezionato
    if (!this.selected) {
      this.state = 'out'
    }
  }
}