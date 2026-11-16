import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * 模板绑定
 * signal
 * 
 * count = signal(0);
 * 1. 读取: count();
 * 2. 直接写: count.set(xxx)
 * 3. 基于旧值: count.update( n => n + 1) -> n 旧值
 *  
 * 双向绑定 需要导入模块 FormsModel
 * 1. [(ngModel)]="name"
 * 2. [ngModel]="name()" + (ngModelChange)="onChang($event)"
 * 
*/

@Component({
  selector: 'component-comm',
  imports: [FormsModule],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  private name = signal<string>("Angular");
  private count = signal<number>(20);
  private product = signal({ price: 200, stock: 12 });
  private text = signal("初始文字");
  private isDisabled = signal(false);
  private isActive = signal(false);
  private hover = signal(false);
  private barWidth = signal(30);


  onInput(e: Event) {
    this.text.set((e.target as HTMLInputElement).value);
  }
  onChange(value: string) {
    this.name.set(value);
  }
}