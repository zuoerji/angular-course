import { Component, input } from '@angular/core';
import { ComponentControl } from './components/componentControl';


@Component({
  selector: 'demo4',
  imports: [ComponentControl],
  template: `
    <component-control></component-control>
  `
})

export class Demo4 {
};