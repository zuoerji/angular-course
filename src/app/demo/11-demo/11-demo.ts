import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';


@Component({
  selector: 'demo10',
  imports: [ComponentComm],
  template: `
    <component-comm></component-comm>
  `
})

export class Demo10 {};