import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * if 控制流
 * 1. *ngIf - 旧
 *  在标签上个使用
 *  注意: 要使用 *ngIf 需要导入 CommonModule 模块
 * 2. @if - 新
 *  不在标签上使用
*/

@Component({
  selector: 'component-comm',
  imports: [CommonModule],
  templateUrl: './html/component-if.html'
})
export class ComponentComm {
  flag = signal(false);
}