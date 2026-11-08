
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
/**
 * AsyncPipe与signal 与 别名
*/

@Component({
  selector: 'component-comm',
  imports: [AsyncPipe],
  templateUrl: './html/component-comm.html',
})
export class ComponentComm {
  user1$ = new BehaviorSubject<{name: string}>({ name:'张三'});
  user2$ = new Observable<{name: string}>((sub) => {
    return this.user1$.subscribe(sub)
  });

  user3 = toSignal(this.user1$, { initialValue: { name: '' } });
  user4$ = new BehaviorSubject<{name: string}>({ name:'' });
}