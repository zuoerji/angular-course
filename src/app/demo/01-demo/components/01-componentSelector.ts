
import { Component } from '@angular/core';

/**
 * selector: 
 * 
 *  1. 标签名
 *  2. 类名
 *  3. id 
 *  4. 属性名
 * 
*/

// @Component({
//   selector: '#reset-button',
//   template: '<span class="red">按钮</span>',
//   styles: ['.red { color: red; }']
// })

@Component({
  selector: "[zButton]",
  template: '<span>按钮-zButton</span>',
})
export class ResetButton {}


@Component({
  selector: 'component-comm',
  imports: [ResetButton],
  template: `<div>
    <h1>Component 的使用</h1>
    <div zButton></div>
  </div>`
})
export class ComponentComm {}