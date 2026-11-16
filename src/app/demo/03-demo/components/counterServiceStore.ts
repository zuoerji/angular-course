
import { Service, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * 使用 @Service 
 * 
*/

@Service()
export class CounterStore {
  count = signal(0);
  http = inject(HttpClient);
  add() {
    this.count.update( n => n + 1);
    console.log(this.http, '====service-http====');
  }

  reduce() {
    this.count.update( n => n - 1 );
  }
}
