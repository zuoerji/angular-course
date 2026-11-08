import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'text-component',
  template: '<span class="red bg-color font-style font-size"> text-component 组件 </span>',
  // styles: `.green{color:green;}`,
  // styles: [`.green{color:green;}`],
  styles: ['.red { color: red; }', '.bg-color { background-color: yellow; }'],
  // styleUrl: './styles/style.css',
  styleUrls: ['./styles/style.css', './styles/font-size.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextComponent {}