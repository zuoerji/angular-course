import { Component, Input, signal, model, inject } from '@angular/core';
import { CounterStore } from './counterStore';
/**
 * 跨组件通信
*/
@Component({
  selector: 'child-input1',
  template: `
  <div class="lab">
    <h4>子组件1</h4>
    <div class="lab-title">子组件1 展示计数: {{store.count()}} </div>
    <button (click)="onAddClick($event)">子组件1按钮-加</button> <br/>
    <button (click)="onReduceClick($event)">子组件1按钮-减</button>
  </div>`,
})
export class ChildInput1 {
  constructor(public store: CounterStore) {}

  onAddClick(e: Event) {
    this.store.add();
  }
  onReduceClick(e: Event) {
    this.store.reduce();
  }
}

@Component({
  selector: 'child-input2',
  template: `
  <div class="lab">
    <h4>子组件1</h4>
    <div class="lab-title">子组件2 展示计数: {{store.count()}} </div>
    <button (click)="onAddClick($event)">子组件2按钮-加</button> <br/>
    <button (click)="onReduceClick($event)">子组件2按钮-减</button>
  </div>`,
})
export class ChildInput2 {
  constructor(public store: CounterStore) {}
  onAddClick(e: Event) {
    this.store.add();
  }
  onReduceClick(e: Event) {
    this.store.reduce();
  }
}


@Component({
  selector: 'component-comm',
  imports: [ChildInput1, ChildInput2],
  providers: [CounterStore],
  templateUrl: './html/componentComm-event-bus.html'
})
export class ComponentComm {
  constructor(public store: CounterStore){}

  onAddClick(e: Event) {
    this.store.add();
  }
  onReduceClick(e: Event) {
    this.store.reduce();
  }
}