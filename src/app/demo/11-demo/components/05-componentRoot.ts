import {Component, inject, Injectable, InjectionToken, signal, input } from '@angular/core';

/**
 * 依赖注入
 * providers
 *
 *
 * */

let instance = 0;

@Injectable({ providedIn: 'root' })
class GlobalCounter {
  id = ++ instance;
  count = signal(0);
}

@Injectable()
class LocalCounter {
  id = ++ instance;
  count = signal(0);
}

@Component({
  selector: 'global-card',
  providers: [LocalCounter],
  template: `
    <div class="lab">
      <div class="lab-title">{{ title() }}</div>
      <p>实例: {{ counter.id }}</p>
      <p>count: {{ counter.count() }}</p>
      <button (click)="counter.count.update(n => n +1)">count + 1</button>
    </div>
  `
})
export class GlobalCard {
  title = input('全局实例');
  counter = inject(GlobalCounter);
}

@Component({
  selector: 'local-card',
  providers: [LocalCounter],
  template: `
    <div class="lab">
      <div class="lab-title">{{ title() }}</div>
      <p>实例: {{ counter.id }}</p>
      <p>count: {{ counter.count() }}</p>
      <button (click)="counter.count.update(n => n +1)">count + 1</button>
    </div>
  `
})
export class LocalCard {
  title = input('局部实例');
  counter = inject(LocalCounter);
}

@Component({
  selector: 'component-comm',
  imports: [LocalCard, GlobalCard],
  templateUrl: './html/component-root.html'
})
export class ComponentComm {

}