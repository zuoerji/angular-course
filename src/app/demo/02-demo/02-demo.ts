import { Component } from '@angular/core';

/**
 * 模板绑定
 * signal
 * 
 * count = signal(0);
 * 1. 读取: count();
 * 2. 直接写: count.set(xxx)
 * 3. 基于旧值: count.update( n => n + 1) -> n 旧值
 * 
 * 双向绑定 需要导入模块 FormsModel
 * [(ngModel)]="name"
*/

import { ComponentComm } from './components/componentComm';

@Component({
  imports: [ComponentComm],
  selector: 'demo2',
  template: `<component-comm />`
})
export class Demo2 {};