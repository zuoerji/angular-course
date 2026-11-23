import {Component, inject, Injectable, InjectionToken, signal} from '@angular/core';

/**
 * 依赖注入
 * 令牌/钥匙
 * InjectionToken
 * 为什么要在这个,是因为 inject 的时候,必须是类,这个就处理不是类的情况
 * 注意:
 *  1.optional 如果在注册的时候.没有设置 factory 使用的是就会报错
 *    比如: missing = inject(MISSING); 这样就会报错
 *    optional: true 的作用是：当 Angular 找不到你要注入的令牌时，不要报错，而是返回 null。
 *    需要改成 :missing = inject(MISSING,{  optional: true}); 但是这个是没有值的
 * 2. self: 仅当前层
 * 3. skipSelf:  从父级开始向上
 *  * */

const API_BASE_URL = new InjectionToken<string>('API_BASE_URL', {
  providedIn: 'root',
  factory: () => 'http://localhost:8080'
});

const MISSING = new InjectionToken<string>('MISSING');
const MESSAGE = new InjectionToken<string>('MESSAGE');

@Component({
  selector: "component-child",
  providers: [{ provide: MESSAGE, useValue: '子组件提供的数据'}],
  template: `
    <div class="lab">
      <div class="lab-title">child</div>
      <div> normalMessage: {{ missing }} </div>
      <div> selfMessage: {{ selfMessage }} </div>
      <div> skipSelfMessage: {{ skipSelfMessage }} </div>
    </div>
  `
})
class ComponentChild {
  missing = inject(MISSING, { optional: true }) ?? 'null';
  selfMessage = inject(MESSAGE, { optional: true, self: true }) ?? 'null, 作用在本层';
  skipSelfMessage = inject(MESSAGE, { optional: true, skipSelf: true }) ?? 'null';
}

@Component({
  selector: 'component-father',
  imports: [ComponentChild],
  providers: [{ provide: MESSAGE, useValue: '父组件提供的数据'}],
  template: `
    <div class="lab">
      <div class="lab-title">father</div>
      <div>
        <component-child />
      </div>
    </div>
  `
})
class ComponentFather {}


@Component({
  selector: 'component-comm',
  imports: [ComponentFather],
  providers: [{ provide: MESSAGE, useValue: '根组件提供的数据'}],
  templateUrl: './html/component-injectToken.html'
})
export class ComponentComm {
  baseUrl = inject(API_BASE_URL);
  missing = inject(MISSING,{ optional: true}) ?? '根组件的 null';
}