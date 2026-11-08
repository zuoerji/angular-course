import { Service, signal } from '@angular/core';

@Service()
export class CounterStore {
  count = signal(0)

  add() {
    this.count.update( n => n + 1);
  }

  reduce() {
    this.count.update(n => n -1)
  }
}