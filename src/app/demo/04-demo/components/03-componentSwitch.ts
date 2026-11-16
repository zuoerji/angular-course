import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * 内置控制流 - switch
 * 
 * 1. ngSwitch - ngSwitchCase
 *  在标签上使用
 * 2. @switch - @case
 *  不在标签上使用
*/


@Component({
  selector: 'component-comm',
  imports: [CommonModule],
  templateUrl: './html/component-switch.html'
})
export class ComponentComm {
  role = signal<string>('admin');
}