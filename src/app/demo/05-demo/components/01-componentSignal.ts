import { Component, signal, effect, untracked } from '@angular/core';

/**
 * signal
 * 
 *  1. 使用：xxx = signal(x)  -> xxx()
 *  2. 赋值: xxx.set(xxx)
 *  3. 更新: xxx.update( n => n + x)
 *  4. 只读: yyy = xxx.asReadonly()  -> yyy()
 * 
 * effect
 * 
 * untracked 
 *  主动切断依赖追踪
*/

@Component({
  selector: 'component-signal',
  templateUrl: './html/component-signal.html'
})
export class ComponentSignal {
  count = signal(0);
  readonlyCount = this.count.asReadonly();
  list = signal(['张三','李四','王五']);
  length = signal(0);
  constructor() {
    effect(()=> {
      console.log('触发');
      this.list();
      untracked(()=> this.length.update(n => n + 1));
    })
  }

  onSet() {
    this.count.set(2);
  }
  onUpdate() {
    this.count.update( n => {
      console.log(n, '旧值')
      return n + 1;
    })
  }

  onUpdateArray() {
    this.list.update(list=>[...list,'update新值'])
  }
  onSetArray() {
    const _list = this.list();
    _list.push('set新值');
    this.list.set(_list);
  }
}