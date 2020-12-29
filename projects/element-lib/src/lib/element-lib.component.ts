import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-element-lib',
  template: `
    <div>
      <p>element works:: {{ someString }} {{ counter }}</p>
      <button (click)="counter=counter+1">Increase</button>
    </div>
  `,
  styles: [
  ]
})
export class ElementLibComponent implements OnInit {

  @Input() someString = '';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
