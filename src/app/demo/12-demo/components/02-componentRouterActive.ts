
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';


/**
 * 路由 - Router
 *
 * 1. routerLink
 * 2. routerLinkActive
 *  1. routerLinkActive="类名"
 *  2. [routerLinkActiveOptions]="{ exact: true }" 精准匹配
 *  3. isActive 读取激活状态
 * 3. routerOutlet
 *     路由内容占位符
 * */

@Component({
    selector: 'component-comm',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './html/component-router-active.html',
    styleUrls: ['./html/css/index.css'],
})
export class ComponentComm {
    routerLinks = ['/demo12','12'];

}