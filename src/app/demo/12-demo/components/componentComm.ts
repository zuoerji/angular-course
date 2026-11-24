
import {Component, inject, input} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/**
 *
 * RouterOutlet
 *
 *
 * */

@Component({
    selector: 'panel-page',
    template: `
        <div class="lab">
            <div class="lab-title">子路由 panel </div>
            <p> 参数:{{ tab() }}</p>
        </div>
    `
})
export class PanelPage {
    tab = input<string>('无');
}

@Component({
    selector: 'item-page',
    template: `
        <div class="lab">
            <div class="lab-title">子路由 item </div>
            <p> 参数:{{ id() }}</p>
        </div>
    `
})
export class ItemPage {
    id = input<number>(0);
}


@Component({
    selector: 'component-comm',
    imports: [RouterLink, RouterOutlet],
    templateUrl: './html/component-comm.html',
})
export class ComponentComm {
    router = inject(Router);
    goChild() {
        void this.router.navigateByUrl('/demo12/panel/ok');
    }
}