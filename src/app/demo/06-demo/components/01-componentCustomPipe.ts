import { Component, Inject, Injectable, Pipe, PipeTransform, signal } from '@angular/core';

/**
 * 1. 自定义 @Pipe
 *  pure: true -> 简单数据类型改值会触发,复杂数据类型,只要不改地址,就不会触发(改属性,也不会触发)
 *  pure: false -> 只要组件发生变更检测,都会触发,不管是不是自己的值
 * 
 * 
*/

@Injectable()
class PipeCalls {
  pure = 0;
  impure = 0;
}

@Pipe({ name: 'pipe1', pure: true })
class Pipe1 implements PipeTransform {
  constructor(private calls: PipeCalls) {}
  transform(value: string):string {
    this.calls.pure += 1;
    return value + '1';
  }
}

@Pipe({ name: 'pipe2', pure: false })
class Pipe2 implements PipeTransform {
  constructor(private calls: PipeCalls) {}
  transform(value: string):string {
    this.calls.impure += 1;
    return value + '2';
  }
}

@Component({
  selector: 'component-comm',
  imports: [Pipe1, Pipe2],
  providers: [PipeCalls],
  templateUrl: './html/component-custom-pipe.html',
})
export class ComponentComm {
  count = signal(0);
  shot = signal('默认');
  text = signal('signal');

  constructor(private calls: PipeCalls) {}
  add() {
    this.count.update( c => c + 1);
    this.readCalls();
  }

  changeText() {
    this.text.set('修改后的文字');
    this.readCalls();
  }

  readCalls() {
    this.shot.set(`pure=${this.calls.pure} / impure=${this.calls.impure} `);
  }
}