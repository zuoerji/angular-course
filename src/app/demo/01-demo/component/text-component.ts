import { Component, ViewEncapsulation } from '@angular/core';

// 类名
// @Component({
//   selector: '.reset-button',
//   template: '<span>按钮</span>'
// })
// id
// @Component({
//   selector: '#reset-button',
//   template: '<span>按钮</span>'
// })
// 属性
// @Component({
//   selector: '[zButton], .reset-button',
//   template: '<span>按钮</span>'
// })
@Component({
  selector: '[data=a111]',
  template: '<span class="red">按钮</span>',
  styles: ['.red { color: red; }'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ResetButton {}


@Component({
  selector: 'text-component',
  imports: [ResetButton],
  template: '<span class="red"> text-component 组件 </span> <br /> <div data="a111"></div>',
  // templateUrl: './html/template.html',
  // template: '<span class="red bg-color font-style font-size"> text-component 组件 \n </span> <div data="a111"></div>',
  // template: '<span class="red bg-color font-style font-size"> text-component 组件 \n </span> <div zButton></div> <div class="reset-button"></div>',
  // template: '<span class="red bg-color font-style font-size"> text-component 组件 \n </span> <div id="reset-button"></div>',
  // styles: `.green{color:green;}`,
  // styles: [`.green{color:green;}`],
  styles: ['.red { outline: 3px solid blue; }', '.bg-color { background-color: yellow; }'],
  // styleUrl: './styles/style.css',
  // styleUrls: ['./styles/style.css', './styles/font-size.css'],
  encapsulation: ViewEncapsulation.ShadowDom
  
})
export class TextComponent {}