import { Component, Input, signal, model, inject, input, computed } from '@angular/core';


/**
 * 组件通信-路由传值
 * withComponentInputBinding
 * 使用步骤:
 *  1. 引入 withComponentInputBinding
 *  2. 在 组件件里面声明 一个 input 可以接收到 路由传过来的值
 * 
*/


@Component({
  selector: 'component-comm',
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  id = input<string>();
  userId = computed(() => `当前 ID 是: ${this.id()}`);
}