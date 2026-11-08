import { Component, ViewEncapsulation } from '@angular/core';
/**
 * 1. selector: template 模板中使用
 *  1. 标签
 *  2. 类名 | id | 属性
 *  
 * 2. template: 模版
 *  1. 字符串 -> template:'<span>xxx</span>'
 *  2. 外部文件 -> templateUrl: './xxxx.html'
 * 
 * 3. styles: 样式
 *  1. 字符串 -> '.red { color: red; }'
 *  2. 数组 -> ['.red { color: red; }','.bg-color { background-color: yellow; }']
 *  3. styleUrl -> './xxxx.css'
 *  4. styleUrls: ['./xxx.css','./xxx.css']
 * 
 * 4. encapsulation: 
 *  1. emulated: css 局部变量
 *  2. None: css 全局变量
 *  3. ShadowDom: 样式彻底隔离
 *  区别:
 *    1. emulated: 是添加了私有类名
 *    2. ShadowDom: 是增加了一层 #shadow-root
 *    3. 影子 DOM CSS 样式隔离, javascript 访问隔离 document.querySelector 获取不到
 *      
*/

@Component({
  selector: 'text-component',
  template: '<span class="red"> text-component 组件 </span>',
  styles: [`.red{color:red;}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextComponent {}