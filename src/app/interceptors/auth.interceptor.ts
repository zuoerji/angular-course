// src/app/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const auth = inject(AuthService);
    auth.setToken('999999999999999999999999999999999999999999');
    const token = auth.getToken();
    console.log(token, '===token====');
    // 只给 /api 请求加 token
    if (token && req.url.startsWith('/api')) {
        const cloned = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next(cloned);
    }

    return next(req);
};