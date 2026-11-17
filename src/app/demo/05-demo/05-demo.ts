import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * signal 相关 api 
 * 
 * 1. signal 的使用
 * 2. computed 的使用
 * 3. effect 的使用
 * 4. linkSignal 的使用
 * 5. toSignal/toObservable
 * 
*/

@Component({
  selector: 'demo5',
  imports: [ComponentComm],
  template: '<component-comm/>'
})
export class Demo5 {}