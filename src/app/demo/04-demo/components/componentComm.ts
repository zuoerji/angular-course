import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * 内置控制流 - 懒加载容器
 * @defer/@placeholder/@loading/@error 
 * 
 * @defer: 懒加载的容器
 *  1. 进入视口 - viewport
 *  2. 点击 - interaction
 *  3. 悬停 - hover
 *  4. 定时 - timer
 *  5. 浏览器空闲 - idle
 * 
 * @placeholder: 避免页面布局的内容加载后发生跳动
 * @loading: 等待下载
 *  1. minimum: 最少显示多久
 *  2. after: 下载开始后等待多久才显示
 * @error: 失败兜底
*/

@Component({
  selector: 'component-comm',
  imports: [CommonModule],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}