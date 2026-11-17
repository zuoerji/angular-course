import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/**
 * 外壳组件：左侧常量目录 + 右侧当前 API 的 demo。
 * 录制时切 API 只要点一下。目录按「章」分组，前 5 章 16 个 API。
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="shell">
      <nav class="sidebar">
        <h1>Angular 22</h1>
        <div class="group-title">第 1 章-基本用法 </div>
        <a routerLink="/demo1" routerLinkActive="active">@Component 基本使用</a>
        <a routerLink="/demo2" routerLinkActive="active">模板绑定</a>
        <a routerLink="/demo3/29" routerLinkActive="active">组件通信</a>
        <a routerLink="/demo4" routerLinkActive="active">内置控制流</a>
        <a routerLink="/demo5" routerLinkActive="active">signal</a>

      </nav>
      <main class="main">
        <router-outlet />
      </main>
    </div>
  `,
})
export class App {}
