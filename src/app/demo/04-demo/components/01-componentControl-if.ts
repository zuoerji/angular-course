import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * 1. if 
 *  1. *ngIf 需要导入CommonModule
 *  2. @if 直接使用
 *
 * 
*/

@Component({
  selector: 'component-control',
  imports: [CommonModule],
  templateUrl: './html/component-control-if.html'
})
export class ComponentControl {
  flag = signal(false);
  state = signal<string>('loading')
}