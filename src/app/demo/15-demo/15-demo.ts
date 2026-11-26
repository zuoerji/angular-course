import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';


@Component({
    selector: 'demo15',
    imports: [ComponentComm],
    template: `
    <component-comm></component-comm>
  `
})

export class Demo15 {}