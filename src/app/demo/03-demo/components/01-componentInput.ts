
import { Component, Input, signal, input } from '@angular/core';

/**
 * 组件通信
 * 父传子,对于子组件来说,就是输入
 * 输入:
 *  1. @Input , 旧版
 *  2. input  , 新版
 * 
 * 区别:
 *  如果使用 @Input 方式,就是普通值
 *  如果使用 input 方式,就是 signal 对象,在 template 里面需要调用(xxx())
 * 
 * 
*/

// @Input
// @Component({
//   selector: 'child-input',
//   template: `
//     <div class="lib">
//       <div class="lab-title"> 子组件接收到 text: {{ text }} </div>
//     </div>
//   `
// })
// export class ChildInput {
//   @Input() text: string = "你好111";
// }

// input - signal 对象
@Component({
  selector: 'child-input',
  template: `
    <div class="lib">
      <div class="lab-title"> 子组件接收到 text: {{ text() }} </div>
    </div>
  `
})
export class ChildInput {
  text = input('你好222');
}

@Component({
  selector: "component-comm",
  imports: [ChildInput],
  templateUrl: './html/component-input.html'
})
export class ComponentComm {
  value = signal('这是父组件的数据');
}