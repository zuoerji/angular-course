import { Component } from '@angular/core';
import { TemplateComponent } from './components/template-component';


@Component({
  selector: 'demo2',
  imports: [TemplateComponent],
  template: `
    <h1>模板绑定</h1>
    <template-component></template-component>
  `
})

export class Demo2 {};