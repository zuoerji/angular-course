import { Component, signal, effect, untracked } from '@angular/core';

/**
 * signal
 * 
 * 1. 使用: xxx = signal(x) -> xxx()
 * 2. 赋值: xxx.set(xxx)
 * 3. 更新: xxx.update(n => n + x) -> n 就是 旧值
 * 4. 只读: yyy = xxx.asReadonly() -> yyy()
 * 
 * signal 所有的数据类型都可以使用
 * 
 * effect: 收集依赖,一旦 signal 数据有改动,就会触发回调
 * untracked: 不会触发依赖收集
 * 
 * 问题: 
 * 在复杂数据类型中
 *  1. 使用 set 会更改数据原始地址  
 *  2. 使用 update 就是在原来的数据的基础上进行修改
 * 
*/

@Component({
  selector: 'component-comm',
  templateUrl: './html/component-signal.html'
})
export class ComponentComm {
  count = signal(0);
  readonlyCount = this.count.asReadonly();
  // list = signal(['张三','李四','王五']);
  list = signal(['张三']);
  length = signal(0);
  constructor() {
    effect(()=>{
      console.log('触发');
      this.list();
      untracked(() => this.length.update(n => n + 1));
    })
  }

  onChangeCount(type: string) {
    if (type === 'set') {
      this.count.set(2);
    }

    if (type === 'update') {
      this.count.update( n => {
        console.log(n,'旧值');
        return n + 1;
      })
    }
  }

  onChangeList(type: string) {
    if (type === 'set') {
      const _list = this.list();
      _list.push('set新值');
      this.list.set(_list);
    }
    if (type === 'update') {
      this.list.update(list => [...list, 'update新值']);
    }
  }

  // onChangeReadonlyCount() {
  //   this.readonlyCount.set(4);
  // }

}