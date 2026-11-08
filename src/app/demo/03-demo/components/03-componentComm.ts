import { Component, Input, signal, input, Output, EventEmitter, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * 组件通信
 *  model
 *  input 不能做的双向数据绑定, model 可以做到
*/
// model 的使用
@Component({
  selector: 'child-input',
  imports: [FormsModule],
  template: `
  <div class="lab">
    <div class="lab-title">子组件收到的 text</div>
    {{ text() }}
    <input [(ngModel)]="text"  />
  </div>`,
})
export class ChildInput {
  text = model('你好');
}


@Component({
  selector: 'component-comm',
  imports: [ChildInput],
  templateUrl: './html/componentComm-input.html'
})
export class ComponentComm {
  value = signal("angular");
}