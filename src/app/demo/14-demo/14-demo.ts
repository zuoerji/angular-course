import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';


@Component({
    selector: 'demo14',
    imports: [ComponentComm],
    template: `
    <component-comm></component-comm>
  `
})

export class Demo14 {}