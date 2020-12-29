import { Injector, NgModule } from '@angular/core';
import { ElementLibComponent } from './element-lib.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [ElementLibComponent],
  imports: [
  ],
  exports: [ElementLibComponent]
})
export class ElementLibModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ElementLibComponent, { injector });
    customElements.define('element-component', customElement);
  }
}
