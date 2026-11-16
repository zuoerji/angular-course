
import { Component } from '@angular/core';

/**
 * template: 
 * 1. 字符串 -> template: '<span>xxx</span>'
 * 2. 外部文件 -> templateUrl: './xxxx.html'
 * 
*/


@Component({
  selector: "custom-button",
  templateUrl: './html/component-comm.html'
})
export class ResetButton {}


@Component({
  selector: 'component-comm',
  imports: [ResetButton],
  template: `<div>
    <h1>Component 的使用</h1>
    <custom-button></custom-button>
  </div>`
})
export class ComponentComm {}