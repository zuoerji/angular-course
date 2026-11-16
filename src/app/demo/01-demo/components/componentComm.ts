
import { Component, ViewEncapsulation } from '@angular/core';

/**
 * encapsulation
 *  1. emulated: css 局部变量[默认]
 *  2. None: css 全局变量
 *  3. ShadowDom: 样式彻底隔离
 * 
 * 区别: 
 *  1. emulated 是添加了私有类名
 *  2. ShadowDom 是增加了一层 #shadow-root
 *  3. 影子 DOM CSS 样式隔离, javascript 访问隔离 document.querySelector 获取不到
*/

@Component({
  selector: "custom-button",
  template: '<span class="red bg-color">custom-button</span>',
  encapsulation: ViewEncapsulation.ShadowDom
  // templateUrl: './html/component-comm.html'
})
export class ResetButton {}


@Component({
  selector: 'component-comm',
  imports: [ResetButton],
  styleUrls: ['./styles/font-size.css','./styles/font-weight.css'],
  // styleUrl: './styles/font-size.css',
  styles: ['.red { color: red; }','.bg-color { background-color: yellow; }'],
  template: `<div>
    <h1>Component 的使用</h1>
    <custom-button></custom-button>
    <span class="red bg-color font-size font-weight">这是父组件的 span</span>
  </div>`,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentComm {}