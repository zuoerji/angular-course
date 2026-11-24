import { signal } from '@angular/core';
import { CanActivateFn } from '@angular/router';

/** 13-6 教具：模块级状态 + 函数式守卫，供 app.routes.ts 直接引用 */
export const isLoggedIn = signal(false);

export const loginGuard: CanActivateFn = () => isLoggedIn();