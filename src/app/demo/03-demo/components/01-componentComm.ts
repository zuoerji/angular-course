import { Component, Input, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * 组件通信
 * 1. 输入
 *  1. @input 
 *  2. input
 * 
 * 2. 输出
 *  1. @Output
 *  2. output
 * 
 * 3. 双向绑定
 *  model
 * 
 * 4. 跨组件传递
 *  1. @Service
 *  2. @Injectable
 * 
 * 5. 路由传参
 *  withComponentInputBinding
 *  1. app.config.ts 引入 withComponentInputBinding
 *  2. 在 app.routes.ts 里面 设置 path: 'xxx/:id'
 *  3. 路由地址 xxx/12
 *  4. 在 03-demo.ts 里面直接 获取 id 
 *      id = input<string>();
 *      传递 id 到子组件
 *      [id]="id()"
*/

// @input 使用
// @Component({
//   selector: 'child-input',
//   imports: [FormsModule],
//   template: `
//   <div class="lab">
//     <div class="lab-title">子组件收到的 text</div>
//     {{ text }}
//     <input [(ngModel)]="text">
//   </div>`,
// })
// export class ChildInput {
//   @Input() text: string = '你好';
// }

// input 使用
//   <input [ngModel]="text()" (ngModelChange)="onChange($event)">
@Component({
  selector: 'child-input',
  imports: [FormsModule],
  template: `
  <div class="lab">
    <div class="lab-title">子组件收到的 text</div>
    {{ value() }}
    <input [value]="text()" (input)="onChange($event)" />
  </div>`,
})
export class ChildInput {
  // input 创建只读数据,不能用于 [(ngModel)] 双向绑定
  text = input('你好');
  value = signal('');
  onChange(e: Event) {
    this.value.set((e.target as HTMLInputElement).value)
  }
}


@Component({
  selector: 'component-comm',
  imports: [ChildInput],
  templateUrl: './html/componentComm-input.html'
})
export class ComponentComm {
  value = signal("angular");
}