// src/app/interceptors/transform-response.interceptor.ts
import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const transformResponseInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);

    return next(req).pipe(
        // ---------- 1. 修改成功响应 ----------
        map((event) => {
            if (event instanceof HttpResponse && event.body) {
                const body = event.body as any;

                if (body?.data?.name) {
                    body.data.name = `${body.data.name}（来自拦截器）`;
                }
                if (body?.message) {
                    body.message = `[已处理] ${body.message}`;
                }

                return event.clone({ body });
            }
            return event;
        }),

        // ---------- 2. 统一错误处理 ----------
        catchError((error: HttpErrorResponse) => {
            let userMessage = '请求失败，请稍后重试';

            if (error.status === 0) {
                // 网络断开 / CORS / 后端未启动
                userMessage = '网络异常，请检查网络连接';
            } else if (error.status === 401) {
                userMessage = '登录已过期，请重新登录';
                // 典型处理：清 token + 跳登录
                // inject(AuthService).clearToken();
                // router.navigate(['/login']);
            } else if (error.status === 403) {
                userMessage = '没有权限访问该资源';
            } else if (error.status === 404) {
                userMessage = '请求的资源不存在';
            } else if (error.status >= 500) {
                userMessage = '服务器开小差了，请稍后再试';
            } else if (error.error?.message) {
                // 后端返回了业务错误信息，优先用后端的
                userMessage = error.error.message;
            }

            console.error(`❌ [HTTP ${error.status}] ${req.method} ${req.url}`, {
                url: error.url,
                status: error.status,
                message: error.message,
                body: error.error,
            });

            // 统一弹提示（这里用 alert 演示，实际可换成 toast/notification 服务）
            alert(userMessage);

            // 重新抛出，让组件的 subscribe error 回调仍能收到
            return throwError(() => new Error(userMessage));
        })
    );
};