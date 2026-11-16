
import { Component, Input,Output, EventEmitter, signal, input, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * 组件通信
 * 双相数据绑定
 * model 新的
*/

@Component({
  selector: 'child-input',
  imports: [FormsModule],
  template: `
    <div class="lab">
      <div class="lab-title">子组件接收到的 text {{ text() }}</div>
      <input [(ngModel)]="text" />
    </div>
  `
})
export class ChildInput {
  text = model('你好333');
}

@Component({
  selector: "component-comm",
  imports: [ChildInput],
  templateUrl: './html/component-model.html'
})
export class ComponentComm {
  value = signal('angular');

  onClick() {
    this.value.set('angular1111');
  }
}