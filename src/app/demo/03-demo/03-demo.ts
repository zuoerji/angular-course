/**
 * 组件通信:
 * 
 * 1. 父传子
 * 2. 子传父
 * 3. 双向绑定
 * 4. 跨组件传递
 * 5. 路由传递
 * 
*/

import { Component, input } from '@angular/core';
import { ComponentComm } from './components/componentComm';

@Component({
  selector: 'demo3',
  imports: [ComponentComm],
  template: '<component-comm [id]="id()" />'
})
export class Demo3 {
  id = input<string>();
};