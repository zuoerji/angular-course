import {Component, inject, Injectable, InjectionToken, signal, input, Service} from '@angular/core';
/**
 * 依赖注入
 * 1. @Service 相当于全局
 * 2. @Service({ autoProvided: false })
 *  必须 加 providers 才能使用
 *
 * */
let instance = 0;

@Service({ autoProvided: false }) // 2 @Service({ autoProvided: false })
class Counter {
  id = ++instance;
  count = signal(0);
  add() {
    this.count.update( n => n + 1);
  }
}


@Component({
  selector: 'component-child',
  providers: [Counter], // 2 @Service({ autoProvided: false })
  template: `
    <div class="lab">
      <div class="lab-title">子组件</div>
      <p> 实例: {{ store.id }} </p>
      <p> count: {{ store.count() }} </p>
      <button (click)="store.add()"> 子组件 count + 1</button>
    </div>
  `
})
class ComponentChild {
  store = inject(Counter);
}

@Component({
  selector: 'component-comm',
  imports: [ComponentChild],
  providers: [Counter], // 2 @Service({ autoProvided: false })

  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  store = inject(Counter);
}