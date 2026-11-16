
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * 使用 @Injectable 
 * 
*/

@Injectable({
  providedIn: 'root'
})
export class CounterStore {
  count = signal(0);

  constructor(private http: HttpClient) {}

  add() {
    this.count.update( n => n + 1);
    console.log(this.http,'==http====');
  }

  reduce() {
    this.count.update( n => n - 1 );
  }
}
