
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import { JsonPipe } from '@angular/common';

/**
 * 路由 - Router
 * 路由参数
 * navigateByUrl: 一步到位
 * */


@Component({
    selector: 'component-comm',
    imports: [JsonPipe],
    templateUrl: './html/component-navigateUrl.html',
    styleUrls: ['./html/css/index.css'],
})
export class ComponentComm {
    router = inject(Router);
    route = inject(ActivatedRoute);

    paramMap = toSignal(this.route.paramMap, { initialValue: null });
    queryParamMap = toSignal(this.route.queryParamMap, { initialValue: null });

    goId() {
        // void this.router.navigateByUrl('/demo12/12');
        const tree = this.router.createUrlTree(['/demo12',12],{
            queryParams: { page: 1 }
        });
        void this.router.navigateByUrl(tree);
    }
    goQuery() {
        void this.router.navigateByUrl('/demo12?page=2#top')
    }

    callbackRoot() {
        void this.router.navigateByUrl('/');
    }
    callback() {
        void this.router.navigateByUrl('/demo12');
    }
}