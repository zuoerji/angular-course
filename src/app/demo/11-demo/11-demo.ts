import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';


@Component({
  selector: 'demo11',
  imports: [ComponentComm],
  template: `
    <component-comm></component-comm>
  `
})

export class Demo11 {}