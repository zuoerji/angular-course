import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'lazy-page',
    imports: [RouterLink],
    template: `
        <h1 class="page-title">懒加载-子页面</h1>
        <div class="page-sub">进入才下载</div>
        <a routerLink="/demo12">返回</a>
    `
})
export class LazyPage {}