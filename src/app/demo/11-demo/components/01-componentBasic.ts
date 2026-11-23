import {Component, inject, Injectable, signal} from '@angular/core';

/**
 * 依赖注入
 * @Injectable + provideIn + inject
 *
 *
 *
 * */
let instance = 0;
@Injectable({ providedIn: 'root' })
export class Counter {
  id = ++instance;
  count = signal(0);
  add() {
    this.count.update(n => n + 1);
  }
}

@Component({
  selector: "component-child1",
  template: `
    <div class="lab">
      <div class="lab-title">child1</div>
      <div>实例 Id: {{ store.id }}</div>
      <div> count： {{ store.count() }} </div>
      <button class="primary" (click)="store.add()"> child1 add </button>
    </div>
  `
})
class ComponentChild1 {
  store = inject(Counter);
}

@Component({
  selector: "component-child2",
  template: `
    <div class="lab">
      <div class="lab-title">child2</div>
      <div>实例 Id: {{ store.id }}</div>
      <div> count： {{ store.count() }} </div>
      <button class="primary" (click)="store.add()"> child2 add </button>
    </div>
  `
})
class ComponentChild2 {
  store = inject(Counter);
}

@Component({
  selector: 'component-comm',
  imports: [ComponentChild1, ComponentChild2],
  templateUrl: './html/component-basic.html'
})
export class ComponentComm {
  store = inject(Counter);
}