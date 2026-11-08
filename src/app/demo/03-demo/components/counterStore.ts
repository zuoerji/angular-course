import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterStore {
  count = signal(0)

  add() {
    this.count.update( n => n + 1);
  }

  reduce() {
    this.count.update(n => n -1)
  }
}