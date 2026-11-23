import {Component, inject, Injectable, InjectionToken, signal} from '@angular/core';

/**
 * 依赖注入
 * providers
 * 1. useValue: 提供一个静态值
 * 2. useClass: 实例化指定的类
 * 3. useFactory: 调用函数生成值
 *  deps: 依赖
 * 4. useExisting: 创建别名
 *
 * */

class HelloClass {
  say() {
    return '你好!';
  }
}

class WelcomeClass  extends HelloClass {
  welcome() {
    return '欢迎光临!'
  }
}

const CONFIG = new InjectionToken<string>('CONFIG');
const HELLO = new InjectionToken<WelcomeClass>('HELLO');
const FACTORY = new InjectionToken<string>('FACTORY');
const ALIAS = new InjectionToken<string>('ALIAS');



@Component({
  selector: 'component-comm',
  providers: [
    { provide: CONFIG, useValue: '这是 config!' },
    { provide: HELLO, useClass: WelcomeClass},
    { provide: FACTORY, useFactory: (config: string, hello: WelcomeClass) => {
      console.log(config,' ===config');
      console.log(hello, '====hello===');
      return 'factory 生成出来的: ' + config + hello.say() + hello.welcome();
      }, deps: [CONFIG, HELLO] },
    { provide: ALIAS, useExisting: CONFIG },

  ],
  templateUrl: './html/component-providers.html'
})
export class ComponentComm {
  config = inject(CONFIG);
  hello: WelcomeClass = inject(HELLO);
  factory = inject(FACTORY);
  alias = inject(ALIAS);
}