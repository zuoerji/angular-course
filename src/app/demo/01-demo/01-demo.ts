import { Component } from '@angular/core';
import { TextComponent } from './component/text-component';


@Component({
  selector: 'demo1',
  imports: [TextComponent],
  template: `
    <h1>@Component 装饰器简单使用</h1>
    <text-component></text-component>
  `
})

export class Demo1 {};