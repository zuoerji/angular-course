import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'API 遍历 Demo' },
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
  {
    path: 'demo6',
    title: '管道 Pipes',
    loadComponent: () => import('./demo/06-demo/06-demo').then((m) => m.Demo6),
  },
  {
    path: 'demo7',
    title: '指令',
    loadComponent: () => import('./demo/07-demo/07-demo').then((m) => m.Demo7),
  },
  {
    path: 'demo8',
    title: '内容投影',
    loadComponent: () => import('./demo/08-demo/08-demo').then((m) => m.Demo8),
  },
  {
    path: 'demo9',
    title: '视图/内容查询',
    loadComponent: () => import('./demo/09-demo/09-demo').then((m) => m.Demo9),
  },
  {
    path: 'demo10',
    title: '生命周期',
    loadComponent: () => import('./demo/10-demo/10-demo').then((m) => m.Demo10),
  },
  { path: '**', redirectTo: '' },
];
