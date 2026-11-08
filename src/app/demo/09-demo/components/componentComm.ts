import { afterNextRender, Component, contentChild, contentChildren, ElementRef, input, viewChild, viewChildren } from '@angular/core';

/**
 * contentChild / contentChildren
 * contentChild: 拿到 ng-content 的内容
 * afterNextRender: 在 Angular 完成下一次渲染之后，执行一次性的回调
*/

@Component({
  selector: 'custom-item',
  template: `<div class="note"> Item: {{ label() }} --- <ng-content /> </div>`,
})
class CustomItem {
  readonly label = input('');
}

@Component({
  selector: 'custom-list',
  template: `
    <div class="lab">
      list:
      <ng-content />
    </div>
  `
})
class CustomList {
  private items = contentChildren(CustomItem)
  private item = contentChild(CustomItem);


  constructor() {
    afterNextRender(()=>{
      console.log(this.items(), '====items=====');
      console.log(this.item(), '====item=====');
    })
  }
}

@Component({
  selector: 'component-comm',
  imports: [CustomItem, CustomList],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}