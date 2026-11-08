import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * 1. if 
 *  1. *ngIf 需要导入CommonModule
 *  2. @if 直接使用
 *
 * 2. for
*/

interface Item {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'component-control',
  imports: [CommonModule],
  templateUrl: './html/component-control-for.html'
})
export class ComponentControl {

  list = signal<Item[]>([
    { id: 1, name: '张三', age: 12 },
    { id: 2, name: '李四', age: 45 },
    { id: 3, name: '王五', age: 67 },
    { id: 4, name: '小二', age: 89 },
  ]);

  list1 = signal<Item[]>([]);

  trackById(index: number, item:Item) {
    return item.id
  }
}