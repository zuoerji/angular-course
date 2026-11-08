import { Component, signal, effect, computed, afterNextRender, untracked, linkedSignal } from '@angular/core';

/**
 * linkedSignal
 * 1. 跟 signal 一样可以使用 set|update
 * 2. 功能跟 computed 一样,区别就是可以使用 set|update
 * 3. 可以临时覆盖,如果依赖的数据更改,也会进行更改
*/


@Component({
  selector: 'component-comm',
  templateUrl: './html/component-link-signal.html'
})
export class ComponentComm {

  cities = signal(['杭州','成都','武汉']);
  selectCity = linkedSignal(() => this.cities()[0] );

  handleChange(type: string) {
    if (type === 'cities')  {
      this.cities.set(['北京','上海','深圳']);
    } else if (type === 'select') {
      this.selectCity.set(this.cities()[1]);
    } else {
      this.cities.set(['杭州','成都','武汉']);
    }
  }
}