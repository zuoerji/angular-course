
import { Component, Directive, ElementRef ,Renderer2 } from '@angular/core';
/**
 * 指令 @Directive 基础
 * Renderer 之前被废弃了, 就用 Renderer2
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



@Component({
  selector: 'component-comm',
  imports: [HighlighDirective],
  templateUrl: './html/component-basic.html',
})
export class ComponentComm {}