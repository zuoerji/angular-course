/**
 * @Component 属性
 * 1. selector: 标签名  <span><div>  <custom-demo>
 * 2. template: 模版 
 * 3. styles: 样式
 * 4. imports: 导入(组件|....)
 * 5. encapsulation: 样式隔离
 * 
*/

import { Component } from '@angular/core';
import { ComponentComm } from './components/componentComm';

@Component({
  selector: 'text-component',
  imports: [ComponentComm],
  template: '<component-comm />',
})
export class Demo1 {};