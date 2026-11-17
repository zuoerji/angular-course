import { Component, signal, effect, untracked, computed } from '@angular/core';
import { single } from 'rxjs';

/**
 * effect 使用
 * 1. 收集依赖
 * 2. 依赖有变化,触发回调
 * 
 * untracked: 不被记忆为依赖
 * 作用:
 *  1. 在 effect 里面只要是 signal 数据都会触发依赖收集,这个函数就不会触发依赖收集
 * 
 * onCleanup: 
 * 1. 在 effect [重新]执行之前
 * 2. 在被销毁的时候
 * 
*/

interface Item {
  id: number;
  val: string;
}

@Component({
  selector: 'component-comm',
  templateUrl: './html/component-effect.html'
})
export class ComponentComm {
  keyword = signal('a');
  log = signal<Item[]>([]);
  count = 0;
  constructor() {
    effect((onCleanup) => {
      const kw = this.keyword();
      console.log(`effect 执行,当前值是:${kw}`);
      untracked(() => this.log.update( l => [...l, {
        id: ++this.count,
        val: `开始处理:${kw}`
      }]))
      onCleanup(() => {
        console.log(`在之前执行的值是: ${kw}`);
      })
    })
  }

  onChange(value: string) {
    this.keyword.set(value);
  }
}