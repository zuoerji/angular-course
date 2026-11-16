import { Component, Input, signal, model, inject } from '@angular/core';

import { CounterStore } from './counterServiceStore';
// import { CounterStore } from './counterInjectableStore';

/**
 * 跨组件通信
 * 
 * 1. @Service - 新版
 * 2. @Injectable - 旧版
 *
 * 父组件 - store
 *  - 子组件1 - store
 *  - 子组件2 - store
 * 
 * 
 * 使用方式
 *  使用方式1:
  *   1. 创建 class 类 使用 @Service|@Injectable
  *   2. 使用 inject 去注入 class 类
  * 使用过方式2:
  *   1. 创建 class 类 使用 @Service|@Injectable
  *   2. 使用 providers 注入在 父组件里面
  *   3. 就可以在 constructor 里面获取 这个这个类的实例
  * 
  * 区别:
  * @Service 不支持 构造函数注入
  * @Injectable 支持 构造函数注入
  * 
  * 1. 如果是 Injectable 可以直接在构造函数中注入其他模块
  * 2. 如果是 Service 就需要使用 inject 模块去手动注入
 * 
*/
@Component({
  selector: 'child-input1',
  template: `
  <div class="lab">
    <h4>子组件1</h4>
    <div class="lab-title">子组件 展示数量: {{ store.count() }}</div>
    <button (click)="onAddClick()">子组件1按钮-加</button>
    <button (click)="onReduceClick()">子组件1按钮-减</button>
  </div>`,
})
export class ChildInput1 {
  constructor(public store: CounterStore){}
  // store = inject(CounterStore);
  onAddClick() {
    this.store.add();
  }
  onReduceClick() {
    this.store.reduce();
  }
}

@Component({
  selector: 'child-input2',
  template: `
  <div class="lab">
    <h4>子组件2</h4>
    <div class="lab-title">子组件 展示数量: {{ store.count() }}</div>
    <button (click)="onAddClick()">子组件2按钮-加</button>
    <button (click)="onReduceClick()">子组件2按钮-减</button>
  </div>`,
})
export class ChildInput2 {
  constructor(public store: CounterStore){}
  // store = inject(CounterStore);

  onAddClick() {
    this.store.add();
  }
  onReduceClick() {
    this.store.reduce();
  }
}



@Component({
  selector: 'component-comm',
  imports: [ChildInput1, ChildInput2],
  providers: [CounterStore],
  templateUrl: './html/component-event-bus.html'
})
export class ComponentComm {
//  store = inject(CounterStore);
  constructor(public store: CounterStore){}

  onAddClick() {
    this.store.add();
  }
  onReduceClick() {
    this.store.reduce();
  }
}