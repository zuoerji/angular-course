import { Component } from '@angular/core';

/**
 * ng-content -> 插槽
 * select -> 具名插槽
 * 
*/

@Component({
  selector: 'custom-card',
  template: `
    <div class="lab">
      <div class="lab-title"> 标题: <ng-content select="[card-title]" /></div>
      <p> 内容: {{ inner }}</p>
      <div> 正文: <ng-content /> </div>
    </div>
  `
})
class CustomCard {
  private inner = "Card 内部 inner";
}


@Component({
  selector: 'component-comm',
  imports: [CustomCard],
  templateUrl: './html/component-ng-content.html'
})
export class ComponentComm {}