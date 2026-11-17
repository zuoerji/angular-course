import { Component, signal, effect, untracked, computed, linkedSignal } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscriber } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
/**
 * toSignal/toObservable
 * 1. toSignal -> 把 observable 对象转成 signal 对象
 * 2. toObservable -> 把 signal 对象转成 observable 对象
 * 
 * observable 对象的使用
 * 1. 通过 new Observable 创建一个 对象
 * 2. 通过 BehaviorSubject 去创建一个对象
 * 
 * 使用 observable 对象
 * xxx | async -> async (取值|自动清理[当组件销毁时,自动取消订阅,防止内存泄漏])
 * unsubscribe 这个方法 去取消订阅
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
  // _count = 1;
  // _subs: Subscriber<number>[] = [];
  // count$ = new Observable((subscriber) => {
  //   subscriber.next(this._count);
  //   this._subs.push(subscriber);
  //   return () => {
  //     const i = this._subs.indexOf((subscriber));
  //     if (i > -1) this._subs.splice(i, 1);
  //   }
  // });
  
  // add() {
    //   this._count += 1;
    //   this._subs.forEach(s => s.next(this._count));
    // }


  count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  users = new BehaviorSubject<Item[]>([
    { id: 1, name:'张三', active: true },
    { id: 2, name:'李四', active: false },
    { id: 3, name:'王五', active: true },
  ]);

  observableUser$ = this.users.pipe(
    map((user) => {
      return user.filter( u => u.active)
    }) 
  )
    
  signalCount = toSignal(this.count$, { initialValue: 0 });
  observableCount$ = toObservable(this.signalCount);

  add() {
    this.count.next(this.count.value + 1);
  }

  onClick(type: string) {
    if (type === 'reset') {
      const newUsers = [
        { id: 1, name:'张三', active: true },
        { id: 2, name:'李四', active: false },
        { id: 3, name:'王五', active: true },
      ]
      this.users.next(newUsers);
    }

    if (type === 'update') {
      const newUsers = [
        { id: 1, name:'张三1', active: false },
        { id: 2, name:'李四2', active: false },
        { id: 3, name:'王五3', active: true },
      ]
      this.users.next(newUsers);
    }

  }
}