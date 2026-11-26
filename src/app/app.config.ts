import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  provideEnvironmentInitializer,
  ErrorHandler,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { transformResponseInterceptor } from './interceptors/transform-response.interceptor';

import { addLog } from './demo/11-demo/log';

import { LocalErrorHandler } from './error/errorHandler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideEnvironmentInitializer(() => addLog('初始化')),
    { provide: ErrorHandler, useClass: LocalErrorHandler },
    // provideHttpClient(
    //     // 顺序,先过 token ,再设置响应数据
    //     withInterceptors([authInterceptor, transformResponseInterceptor])
    // )
  ]
};
