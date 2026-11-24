
import {Component, inject, signal} from '@angular/core';
import { Router } from '@angular/router';
import { isLoggedIn } from '../guards';

/**
 * 路由守卫
 * canActivate
 * */

@Component({
    selector: 'component-comm',
    templateUrl: './html/component-canActivate.html',
})
export class ComponentComm {
    router = inject(Router);
    loggedIn = isLoggedIn;
    result = signal('未尝试')

    toggle() {
        isLoggedIn.update( v => !v);
        this.result.set('登录状态已切换')
    }

    enterPage() {
        void this.router.navigateByUrl('/demo12/protected').then((ok) => {
            console.log(ok, '===ok====');
            if (!ok) this.result.set('被守卫拦下')
        });
    }

}