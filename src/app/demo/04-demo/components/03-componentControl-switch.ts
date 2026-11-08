import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * switch
*/

interface Item {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'component-control',
  imports: [CommonModule],
  templateUrl: './html/component-control-switch.html'
})
export class ComponentControl {
  role = signal<string>('admin');
  
}