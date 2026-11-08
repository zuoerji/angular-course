import { Component, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * 组件通信
 * 1. @Output
 * 2. output
 * 
*/

// @Output 使用
@Component({
  selector: 'child-input',
  imports: [FormsModule],
  template: `
  <div class="lab">
    <div class="lab-title">发送给父组件</div>
    <button (click)="onClick()">发送</button>
  </div>`,
})
export class ChildInput {
  // @Output() valueChanged = new EventEmitter<string>();
  valueChanged = output<string>();

  onClick() {
    this.valueChanged.emit('子组件来的数据');
  }
}

@Component({
  selector: 'component-comm',
  imports: [ChildInput],
  templateUrl: './html/componentComm.html'
})
export class ComponentComm {
  value = signal("angular");
  handleChange(val: string){
    this.value.set(val)
  }
}