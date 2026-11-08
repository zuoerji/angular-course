import { Component, signal, effect, computed, afterNextRender, untracked, linkedSignal } from '@angular/core';
import { BehaviorSubject, map, } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
/**
 * toSignal/toObservable
 * 
 * 
 * BehaviorSubject 的使用
 * 1. 示例对象
 * 2. 使用 next 去赋值,在 template 里面去使用 xxx | async (1. 订阅|取值|自动清理[组件销毁时,自动取消订阅,防止内存泄漏])
 * 3. 使用 pipe,去做数据流水线.比如过滤,排序等,但是 next 的值的改变也会触发 pipe 
 *  pipe 可以多个
 * 
 * toSignal -> 把 observable 对象 转成 signal 对象
 * toObservable -> 把 signal 对象 转成 observable 对象
*/


interface Item {
  id: number;
  name: string;
  active: boolean;
}


@Component({
  selector: 'component-comm',
  imports: [AsyncPipe],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  private count = new BehaviorSubject<number>(0);
  private users = new BehaviorSubject<Item[]>([
    { id: 1, name: '张三', active: true },
    { id: 2, name: '李四', active: false },
    { id: 3, name: '王五', active: true },
  ]);

  count$ = this.count.asObservable();
  activeUsers$ = this.users.pipe(
    map((user) => {
      return user.filter(u => u.active)
    })
  );

  signalCount = toSignal(this.count$, { initialValue:0 });
  observableCount$ = toObservable(this.signalCount);
  
  add() {
    this.count.next(this.count.value + 1);
  }
  reset() {
    this.count.next(0)
  }
  changeArray() {
    const newUser = [
      { id: 4, name: '张三1', active: false },
      { id: 5, name: '李四2', active: false },
      { id: 6, name: '王五3', active: true },
    ]
    this.users.next(newUser);
  }
  resetArray() {
    const newUser = [
      { id: 1, name: '张三', active: true },
      { id: 2, name: '李四', active: false },
      { id: 3, name: '王五', active: true },
    ]
    this.users.next(newUser);
  }
  onClick(type: string) {
    if (type === 'add') {
      this.add();
    }
    if (type === 'reset') {
      this.reset();
    }
    if (type === 'array') {
      this.changeArray();
    }
    if (type === 'resetArray') {
      this.resetArray();
    }
  }
}