import { afterNextRender,afterEveryRender,afterRenderEffect, Component, ElementRef, input, signal, viewChild } from '@angular/core';

/**
 * afterNextRender: 完成渲染后触发一次
 *  1. earlyRead: 读取 DOM 属性,不能写入 DOM
 *  2. write: 专门用来 写入DOM
 *  3. mixedReadWrite: 同时进行 DOM 的读取和写入
 *  4. read: 专门用来读取 DOM
 * 顺序: earlyRead -> write -> mixedReadWrite -> read
 * 
 * afterEveryRender: 每次完成渲染后都会触发
 * afterRenderEffect: signal 变化时触发
 *  注意,与 effect 的区别
 *  1. effect 读到的 DOM 可能是旧的
 *  2. afterReaderEffect DOM 已经就绪,读到的是最新的
 *   
*/


@Component({
  selector: 'component-comm',
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  count = signal(0);
  sourceRef = viewChild.required<ElementRef<HTMLElement>>('source');
  targetRef = viewChild.required<ElementRef<HTMLElement>>('target');

  constructor() {
    afterNextRender({
      earlyRead: () => {
        const width = this.sourceRef().nativeElement.offsetWidth;
        console.log('earlyRead 读取宽度:', width);
        return width; // 这个 200 会被传给下面的 write
      },
      write: (width: number) => {
        console.log('write', width);
        this.targetRef().nativeElement.style.width = `${width}px`;
        return '写入已完成'; // 这个字符串会被传给下面的 read
      },
      read: (message: string) => {
        console.log('read 收到参数:', message);
        const finalWidth = this.targetRef().nativeElement.offsetWidth;
        console.log('read 最终读取目标宽度:', finalWidth);
      }
    });

    afterEveryRender(()=>{
      console.log('afterEveryRender')
    });

    afterRenderEffect(()=> {
      this.count();
      console.log('afterRenderEffect')
    })
  }

  add() {
    this.count.update(n => n + 1);
  }

}