import { Routes } from '@angular/router';


export const LAZY_ROUTES: Routes = [
    {
        path: 'one',
        title: '懒加载子页面',
        loadComponent: () => import('./lazy-page').then( m => m.LazyPage)
    }
]