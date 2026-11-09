import { Component, input, signal } from '@angular/core';

/**
 * ngOnInit: 初始化
 * ngOnChanges: input 的数据变化触发
 * ngDoCheck: 组件执行变更检测,变更就触发 [触发多]
 * ngAfterContentInit: 组件内容投影
 * ngAfterViewInit: 组件模版和子组件就绪
*/

@Component({
  selector: 'component-child',
  template: `
    <div class="lab">
      <div>  子组件: count: {{ count() }} </div>
      <div>  子组件: name: {{ name() }} </div>
    </div>
  `
})
class ComponentChild {
  count = input(0);
  name = input('');

  ngOnInit() {
    console.log('ngOnInit-child');
  }

  ngOnChanges() {
    console.log('ngOnChanges-child');
  }

  ngDoCheck() {
    console.log('ngDoCheck-child');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit-child')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit-child')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy-child')
  }

}



@Component({
  selector: 'component-comm',
  imports: [ComponentChild],
  templateUrl: './html/component-life.html'
})
export class ComponentComm {

  private count = signal(0);
  private name = signal('张三');
  private user = signal<{name:string}>({name:'王五'})
  active = signal(true);

  ngOnInit() {
    console.log('ngOnInit-father');
  }

  ngDoCheck() {
    console.log('ngDoCheck-father');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit-father')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit-father')
  }

  
  add() {
    this.count.update(n => n + 1);
  }

  changeName(type:string) {
    if (type === 'child') {
      this.name.set("李四");
    } 
    if (type === 'father') {
      this.user.set({ name: '李四' })
    }
  }

  childDisplay(val:boolean) {
    this.active.set(val);
  }
}