
import { Component, Directive, ElementRef ,Renderer2, signal } from '@angular/core';
/**
 * 指令 @Directive + host 绑定
 * 
 * exportAs: 对外暴露的别名
 * selector: 挂载入口
*/

@Directive({
  selector: '[highlight]'
})
class HighlighDirective {
  constructor(el: ElementRef<HTMLElement>, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#fff6d8');
    renderer.setStyle(el.nativeElement, 'borderLeft', '4px solid #d99b00');
    renderer.setStyle(el.nativeElement, 'padding', '8px 12px');
  }
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
  selector: 'component-comm',
  imports: [HighlighDirective, ToggleDirective],
  templateUrl: './html/component-host.html',
})
export class ComponentComm {}