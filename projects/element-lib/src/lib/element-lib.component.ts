import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-element-lib',
  template: `
    <div>
      <p>element-lib works:: {{ counter }}</p>
      <button (click)="counter=counter+1">Increase</button>
    </div>
  `,
  styles: [
  ]
})
export class ElementLibComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
