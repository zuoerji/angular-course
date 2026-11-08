import { Component } from '@angular/core';

/**
 * ng-container -> 不渲染真实的 DOM
 * ngProjectAs -> 具名插槽, 没有就是默认插槽
*/

@Component({
  selector: 'custom-card',
  template: `
    <div class="lab">
      <div class="lab-title"> 标题: <ng-content select="[card-header]" /></div>
      <p> 内容: <ng-content select="[card-content]" /></p>
      <div> 正文: <ng-content /> </div>
    </div>
  `
})
class CustomCard {}


@Component({
  selector: 'component-comm',
  imports: [CustomCard],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}