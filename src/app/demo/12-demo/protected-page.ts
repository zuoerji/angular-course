import { Component } from "@angular/core";
import { RouterLink} from "@angular/router";

@Component({
    selector: 'protected-page',
    imports: [RouterLink],
    template: `
        <h1 class="page-title">受保护页面</h1>
        <div class="card">
            <div class="lab">
                <div class="lab-title">守卫已经放行</div>
                <p>登录才能看到这个页面</p>
            </div>
            <a routerLink="/demo12">返回</a>
        </div>
    `
})
export class ProtectedPage {}