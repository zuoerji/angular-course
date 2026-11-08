import { Component, signal } from "@angular/core";
import { FormsModule } from '@angular/forms';

/**
 * signal 用法
 *  如 count = signal(0);
 *  1. 读取 -> count()
 *  2. 直接写 -> count.set()
 *  3. 基于旧值写 -> count.update(fn)
 * 
 * 双向绑定
 *  1. [(ngModel)] = "name"
 *  2. [ngModel] = "name()" + (ngModelChange)="onChange($event)"
*/

@Component({
  selector: 'template-component',
  imports: [FormsModule],
  templateUrl: './html/template-component.html',
})
export class TemplateComponent {
  private name = signal('Angular');
  private count = signal(0);
  private product = signal({ price: 200, stock: 12 });
  private text = signal('初始文字');
  private isDisabled = signal(false);
  private isActive = signal(false);
  private barWidth = signal(30);
  private hover = signal(false);

  onInput(e:Event) {
    this.text.set((e.target as HTMLInputElement).value);
  }
  onChange(value: string) {
    this.name.set(value);
  }
}