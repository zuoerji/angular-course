import { Component, signal, effect, untracked, computed, linkedSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
/**
 * linkedSignal 使用
 * 特点:
 *  1. 用法跟 signal 是一样的, 可以使用 set|update 去更改值
 *  2. 功能跟 computed 一样
 *  3. 可以临时赋值,如果依赖数据更改,也会随着更改
 * 
 * 高级用法
 * 1. equal: 自定义相等属性
 * 2. source: 源数据
 * 3. computation: 计算函数
 * 4. set: 手动拦截写入
 * 
*/

@Component({
  selector: 'component-comm',
  imports: [JsonPipe],
  templateUrl: './html/component-linked-signal.html'
})
export class ComponentComm {
  user = signal({ id: 1, name: '张三', age: 12 });
  // linkedUser = linkedSignal(() => this.user().name);

  // linkedUser = linkedSignal(
  //   () => this.user(),
  //   {
  //     equal: (a, b) => a.id === b.id
  //   }
  // )

  // linkedUser = linkedSignal({
  //   source: this.user,
  //   computation: (oldVal, newVal) => {
  //     console.log(newVal, '===newVal===');
  //     console.log(oldVal, '===oldVal===');
  //     return '121212';
  //   }
  // })


  linkedUser = linkedSignal({
    source: this.user,
    computation: (s) => s.name,
    set: (val, rawSet) => {
      // val 值: 通过修改的值
      // rawSet: 函数,去修改最终的值
      console.log(val,'set 函数中的数据');
      rawSet('王五');
    }
  })


  onLinkedChange(type: string) {
    if (type === 'set') {
      this.linkedUser.set('李四');
    }
    if (type === 'update') {
      this.linkedUser.update( n => n + 'update');
    }
  }


  onOriginChange() {
    this.user.set({ id: 1, name: '王五', age: 90})
  }
}