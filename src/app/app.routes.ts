import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'API Demo' },
  {
    path: 'demo1',
    title: '@Component 使用',
    loadComponent: () => import('./demo/01-demo/01-demo').then((m) => m.Demo1),
  },
  {
    path: 'demo2',
    title: '模板绑定',
    loadComponent: () => import('./demo/02-demo/02-demo').then((m) => m.Demo2),
  },
  {
    path: 'demo3/:id',
    title: '组件通信',
    loadComponent: () => import('./demo/03-demo/03-demo').then((m) => m.Demo3),
  },
  {
    path: 'demo4',
    title: '内置控制流',
    loadComponent: () => import('./demo/04-demo/04-demo').then((m) => m.Demo4),
  },
  {
    path: 'demo5',
    title: 'signal',
    loadComponent: () => import('./demo/05-demo/05-demo').then((m) => m.Demo5),
  },
];
