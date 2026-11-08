import { Component, Input, signal, model, inject, input, computed } from '@angular/core';
/**
 * 路由传值
*/

@Component({
  selector: 'component-comm',
  templateUrl: './html/componentComm-router.html'
})
export class ComponentComm {
  id = input<string>();

  heroId = computed(()=> `当前 ID: ${this.id()}`)
}