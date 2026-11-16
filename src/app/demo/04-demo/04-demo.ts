import { Component } from '@angular/core';
import { ComponentComm } from './components/componentComm';

/**
 * 内置控制流
 * 1. @if
 *  ngIf -> @if
 * 2. @for
 *  ngFor -> @for
 * 3. @switch
 * 4. @defer
 * 
 * 对比 angular22 使用的是什么,之前版本使用的是什么
*/

@Component({
  selector: 'demo4',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo4 {}