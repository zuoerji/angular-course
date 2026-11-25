import {Component, inject, signal} from '@angular/core';
import {HttpClient, httpResource} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
/**
 * httpResource 的使用
 * error: 报错信息
 * isLoading: loading 状态
 * hasValue: 是否有值
 * value: 值
 * */


@Component({
    selector: 'component-comm',
    imports: [JsonPipe],
    templateUrl: './html/component-comm.html'
})
export class ComponentComm {
    http = inject(HttpClient);
    id = signal(0);
    // userRes = httpResource(() => this.id() === 0 ? undefined : `/api/auth/${this.id()}`);
    userRes = httpResource(() => this.id() === 0 ? undefined : ({
        url: 'api/auth',
        method: "POST",
        body: {
            id: this.id(),
        }
    }));
    getUser(id:number) {
        this.id.set(id);
    }


}