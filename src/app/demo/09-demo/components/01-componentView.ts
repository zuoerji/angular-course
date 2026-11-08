import { afterNextRender, Component, ElementRef, viewChild, viewChildren } from '@angular/core';

/**
 * viewChild / viewChildren
 * 
 * afterNextRender: 在 Angular 完成下一次渲染之后，执行一次性的回调
*/

@Component({
  selector: 'component-comm',
  templateUrl: './html/component-view.html'
})
export class ComponentComm {
  private box = viewChild<ElementRef<HTMLElement>>('box');
  private items = viewChildren<ElementRef<HTMLElement>>('item');

  constructor() {
    afterNextRender(() => {
      console.log(this.box(), 'box');
      console.log(this.items(), 'items');
    });
  }
}