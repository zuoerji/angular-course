import {Component, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultData, ResultResponse, User} from '../../../../../shared/types';
/**
 * 1. 创建 proxy.conf.json
 *  {
 *   "/api": {
 *     "target": "http://127.0.0.1:8080",
 *     "secure": false,
 *     "changeOrigin": true
 *   }
 * }
 * 2. angular.json 中修改
 *  "serve": {
 *
 *           "options": {
 *             "port": 3003,
 *             "proxyConfig": "proxy.conf.json"
 *           },
 *   }
 * */


@Component({
    selector: 'component-comm',
    templateUrl: './html/component-http.html'
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
        this.http.post<ResultResponse<ResultData>>('/api/course',{ version: '22' }).subscribe(res => {
            console.log(res, '====res====post');
            if (res.success) {
                this.result.set(`POST 请求成功: version=${res.data.version}, name=${res.data.name}`);
            }
        })
    }
}