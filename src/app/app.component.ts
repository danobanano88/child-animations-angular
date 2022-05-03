import { Component } from '@angular/core';
import { trigger, transition, query, group, style, animate, state, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('theParentAnimation', [
      state('down', style({
        transform: 'translateY( 100% ) translateZ( 0 )',
      })),
      state('up', style({
        transform: 'translateY( 0% ) translateZ( 0 )',
      })),      
      transition('* <=> *', [
        group([
          query('@theChildAnimation', animateChild()),
          animate('0.9s cubic-bezier(0.55, 0.31, 0.15, 0.93)'),
        ]),
      ]),
    ]),
    trigger('theChildAnimation', [
      state('down', style({
        transform: 'translateY( 100% ) translateZ( 0 )',
      })),
      state('up', style({
        transform: 'translateY( 0% ) translateZ( 0 )',
      })),      
      transition('* <=> *', [
        animate('0.9s cubic-bezier(0.55, 0.31, 0.15, 0.93)'),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'child-animations';
  state = 'up';
  toggleState() {
    this.state = ( this.state === 'up' ? 'down' : 'up' );
  }
}
