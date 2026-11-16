
import { Component, Input,Output, EventEmitter, signal, input, output } from '@angular/core';

/**
 * 组件通信
 * 
 * 子传父, 对于子组件来说, 传出
 * 1. @Output
 * 2. output
 * 
 * 区别:
 *  1. @Output 需要另一个模块 EventEmitter
 *  2. output 只需要声明就可以了
 * 
*/

@Component({
  selector: 'child-input',
  template: `
    <div class="lab">
      <div class="lab-title">发送给父组件</div>
      <button (click)="onClick()">发送给</button>
    </div>
  `
})
export class ChildInput {
//  @Output() valueChanged = new EventEmitter<string>();
  valueChanged = output<string>();

 onClick() {
  this.valueChanged.emit('子组件来的数据');
 }
}

@Component({
  selector: "component-comm",
  imports: [ChildInput],
  templateUrl: './html/component-output.html'
})
export class ComponentComm {
  value = signal<string>('angular');
 handleChange(val: string){
  // console.log(val, '---value=====');
  this.value.set(val);
 }
}