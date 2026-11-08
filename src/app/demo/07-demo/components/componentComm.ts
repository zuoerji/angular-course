
import { Component, Directive, ElementRef ,input,Renderer2, signal } from '@angular/core';
/**
 * 指令 @Directive + host 绑定
 * 
 * 
 * imports: 只是让指令在模板里“可用”，真正生效需要你在某个元素上写对应的选择器属性
 * hostDirectives: 不需要在模板里写任何选择器，Angular 在创建组件时自动把指令实例挂到当前组件的宿主元素上，强制生效，无法选择不用。
 * 
*/

@Directive({
  selector: '[highlight]',
  host: {
    '[attr.data-user]': 'text()'
  }
})
class HighlighDirective {
  constructor(el: ElementRef<HTMLElement>, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#fff6d8');
    renderer.setStyle(el.nativeElement, 'borderLeft', '4px solid #d99b00');
    renderer.setStyle(el.nativeElement, 'padding', '8px 12px');
  }
  text = input('普通')
}

@Directive({
  selector: '[appToggle]',
  exportAs: 'appToggle1',
  host: {
    '(click)': 'toggle()',
    '[style.background]': 'on() ? "#1a7f4b" : "#ffffff"',
    '[style.color]': 'on() ? "#ffffff" : "#1b1f24"',
    '(mouseenter)': 'onEnter()',
  }
})
class ToggleDirective {
  on = signal(false);

  toggle() {
    console.log('点击');
    this.on.update(v =>!v)
  }
  onEnter() {
    console.log('鼠标进入');
  }
}

@Component({
  selector: 'fancy-button',
  hostDirectives: [{ directive: HighlighDirective, inputs: ["text"] }, ToggleDirective],
  template: `<span class="cursor">组合按钮</span>`,
})
class FancyButton {}


@Component({
  selector: 'component-comm',
  imports: [FancyButton],
  templateUrl: './html/component-comm.html',
})
export class ComponentComm {}