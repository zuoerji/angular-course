
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import { JsonPipe } from '@angular/common';

/**
 * 路由 - Router
 * 路由参数
 * navigate:
 *  1. relativeTo: 相对路径,如果不传,就是根目录
 *  2. queryParamsHandling: 参数的处理策略
 *      1. merge: 新值旧值合并
 *      2. preserve: 保留旧参数,无效
 *  3. queryParams: 设置参数
 *  4. fragment: 设置哈希片段
 *  5. preserveFragment: 将当前的哈希片段保存到下次导航中
 * */


@Component({
    selector: 'component-comm',
    imports: [JsonPipe],
    templateUrl: './html/component-navigate.html',
    styleUrls: ['./html/css/index.css'],
})
export class ComponentComm {
    router = inject(Router);
    route = inject(ActivatedRoute);

    paramMap = toSignal(this.route.paramMap, { initialValue: null });
    queryParamMap = toSignal(this.route.queryParamMap, { initialValue: null });

    goId() {
        void this.router.navigate(['/demo12', 12]);
    }
    goQuery() {
        void this.router.navigate([], {
            queryParams: { page: 2 },
            fragment: 'top',
            queryParamsHandling: 'merge',
        });
    }
    goNewQuery() {
        void this.router.navigate(['/demo12', 14], {
            preserveFragment: false
        });
    }

    callbackRoot() {
        void this.router.navigate(['../']);
    }
    callback() {
        void this.router.navigate(['../'],{
            relativeTo: this.route
        });
    }
}