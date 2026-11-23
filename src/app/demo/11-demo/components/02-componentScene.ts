import {Component, inject, Injectable, signal} from '@angular/core';

/**
 * 依赖注入
 * @Injectable + provideIn + inject
 * 依赖注入的时机
 * 1. 字段初始化
 * 2. 构造函数体内
 *  * */
let instance = 0;
@Injectable({ providedIn: 'root' })
export class LabelStore {
  id = ++instance;
  label = '初始化数据';
}

@Component({
  selector: "component-child",
  template: `
    <div class="lab">
      <div class="lab-title">child</div>
      <div>实例 Id: {{ store.id }}</div>
      <div> label： {{ store.label }} </div>
      <div> ctorLabel: {{ ctorLabel }} </div>
      <div>  </div>
      <button class="primary" (click)="changeLateLabel()">改变 lateLabel</button>
    </div>
  `
})
class ComponentChild {
  store = inject(LabelStore);
  ctorLabel: string;
  lateLabel = signal<string>('lateLabel-初始的值');
  constructor() {
    this.ctorLabel = `构造函数拿到的：${inject(LabelStore).label}`;
  }
  changeLateLabel() {
    console.log('changeLateLabel');
    let string = inject(LabelStore).label;
    this.lateLabel.set(`点击后，更改的值: ${string}`);
  }
}


@Component({
  selector: 'component-comm',
  imports: [ComponentChild],
  templateUrl: './html/component-scene.html'
})
export class ComponentComm {
  store = inject(LabelStore);
}