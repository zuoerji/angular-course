
import { Component } from '@angular/core';

/**
 * styles: 样式
 * 
 * 1. 字符串: '.red { color: red; }'
 * 2. 数组: ['.red { color: red; }', '.bg-color { background-color: yellow; }']
 * 3. styleUrl: './xxx.css'
 * 4. styleUrls: ['./xxx.css','./xxx.css']
 * 
*/


@Component({
  selector: "custom-button",
  template: '<span class="red">custom-button</span>'
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
  </div>`
})
export class ComponentComm {}