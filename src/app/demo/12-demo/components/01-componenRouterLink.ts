
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


/**
 * 路由 - Router
 *
 * 1. routerLink
 *  1. 绝对路径 -> <a routerLink="/demo10">demo10</a>
 *  2. 动态路径 -> <a [routerLink]="routerLinks">demo03</a> <br>
 *  3. 相对路径 -> <a routerLink="setting">相对路径-设置</a>
 *  配置路由:
 *    {
 *     path: 'demo12',
 *     title: '路由',
 *     loadComponent: () => import('./demo/12-demo/12-demo').then((m) => m.Demo12),
 *     children: [
 *       { path: 'setting', component: SettingComponent },
 *     ]
 *   },
 *
 * 2. routerLinkActive
 * 3. routerOutlet
 * */

@Component({
    selector: 'component-comm',
    imports: [
        RouterLink,
        RouterOutlet
    ],
    templateUrl: './html/component-router-link.html'
})
export class ComponentComm {
    router = inject(Router);
    routeCount = this.router.config.length;
    routeUrl = this.router.url;

    routerLinks = ['/demo3','12'];
    constructor() {
        console.log(this.router, 'router');
    }
}