
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

/**
 * 路由懒加载
 * loadComponent / loadChildren
 *
 * loadComponent: 懒加载 一个组件
 * loadChildren: 懒加载 一组路由
 * */


@Component({
    selector: 'component-comm',
    templateUrl: './html/component-lazy.html',
    styleUrls: ['./html/css/index.css'],
})
export class ComponentComm {
    router = inject(Router);
    route = inject(ActivatedRoute);

    goLazy() {
        void this.router.navigateByUrl('/demo12/lazy/one');
    }
}