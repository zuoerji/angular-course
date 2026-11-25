import {Component, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResultData, ResultResponse, User} from "../../../../../shared/types";
import { catchError, of, retry, timeout } from 'rxjs';
/**
 * 错误处理 / 重试 / 超时
 * catchError / retry / timeout
 * */


@Component({
    selector: 'component-comm',
    templateUrl: './html/component-handler.html'
})
export class ComponentComm {
    http = inject(HttpClient);
    result = signal('还没发请求')
    catchError() {
        this.http.get<ResultResponse<User>>('/api/user1/1')
            .pipe(catchError(() => of('数据兜底')))
            .subscribe(res => {
                console.log(res,'====res===catchError=====');
                this.result.set(`catchError: ${res}`);
        });
    }

    retry() {
        this.http.get<ResultResponse<User>>('/api/user1/1')
            .pipe(retry(2))
            .subscribe(res => {
                console.log(res,'====res===retry=====');
                this.result.set(`retry(2): ${res}`);
            });
    }


    timeout() {
        console.log('开始发请求');
        this.http.get<ResultResponse<User>>('/api/timeout')
            .pipe(timeout(500), catchError(() => of('超时兜底')))
            .subscribe(res => {
                console.log(res,'====res===timeout=====');
                this.result.set(`timeout: ${res}`);
            });
    }



}