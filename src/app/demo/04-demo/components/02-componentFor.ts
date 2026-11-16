import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * 内置控制流 - for 循环
 * 
 * 1. *ngFor 
 *  在标签上使用
 * 2. @for 搭配 @empty 使用
 *  不在标签上使用
*/
interface Item {
  id: number;
  name: string;
  age: number;
}


@Component({
  selector: 'component-comm',
  imports: [CommonModule],
  templateUrl: './html/component-for.html'
})
export class ComponentComm {

  list = signal<Item[]>([
    { id: 1, name: '张三', age: 12 },
    { id: 2, name: '李四', age: 45 },
    { id: 3, name: '王五', age: 90 },
  ]);

  list1 = signal<Item[]>([]);


  trackById(index: number, item: Item) {
    return item.id;
  }
}