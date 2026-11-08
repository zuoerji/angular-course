import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';


@Component({
  selector: 'demo3',
  imports: [ComponentComm],
  template: `
    <component-comm [id]="id()"></component-comm>
  `
})

export class Demo3 {
  id = input<string>();
};