import {Component, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResultData, ResultResponse, User} from "../../../../../shared/types";
/**
 * 拦截器: withInterceptors
 *
 * */


@Component({
    selector: 'component-comm',
    templateUrl: './html/component-interceptor.html'
})
export class ComponentComm {
    http = inject(HttpClient);
    result = signal('还没发请求')
    getUser() {
        this.http.get<ResultResponse<User>>('/api/user/1').subscribe(res => {
            console.log(res)
            if (res.success) {
                this.result.set(`GET 请求成功: id=${res.data.id}, name=${res.data.name}, age=${res.data.age}`);
            }
        });
    }

    postMessage() {
        this.http.post<ResultResponse<ResultData>>('/api/course1',{ version: '22' }).subscribe(res => {
            console.log(res, '====res====post');
            if (res.success) {
                this.result.set(`POST 请求成功: version=${res.data.version}, name=${res.data.name}`);
            }
        })
    }

}