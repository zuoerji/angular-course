import { Component, signal, effect, computed, afterNextRender, untracked } from '@angular/core';

/**
 * effect 使用
 * 
 * untracked: 不被记录为依赖
 * onCleanup: 
 *  1. 在执行 effect 重新执行之前
 *  2. 被销毁时
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
      console.log(`effect 执行, 当前值是: ${kw}`);
      untracked(() => this.log.update(l => [...l, {
        id: ++this.count,
        val: `开始处理: ${kw}`
      }]))
      onCleanup(()=> {
        console.log(`在之前执行值是: ${kw}`)
      });
    })
  }
  change(value: string) {
    this.keyword.set(value)
  }
}