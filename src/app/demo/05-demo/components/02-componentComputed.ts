import { Component, signal, effect, untracked, computed } from '@angular/core';

/**
 * computed 使用
 * 1. 依赖收集
 * 2. 缓存
 * 
*/

@Component({
  selector: 'component-comm',
  templateUrl: './html/component-computed.html'
})
export class ComponentComm {
  count = signal(1);
  price = signal(20);
  run = 0;
  runCount = signal(0);

  total = computed(() => {
    this.run += 1;
    return this.price() * this.count();
  });

  setRunCount() {
    this.runCount.set(this.run);
  }

  addPrice() {
    this.count.update( c => c + 1);
    this.setRunCount();
  }

  readThree() {
    this.total();
    this.total();
    this.total();
    this.setRunCount();
    console.log('执行三次');
  }
}