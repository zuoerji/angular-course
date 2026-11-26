import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SettingComponent } from './demo/12-demo/setting';
import { loginGuard } from './demo/12-demo/guards';

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
  {
    path: 'demo11',
    title: '依赖注入',
    loadComponent: () => import('./demo/11-demo/11-demo').then((m) => m.Demo11),
  },
  {
    path: 'demo12',
    title: '路由',
    loadComponent: () => import('./demo/12-demo/12-demo').then((m) => m.Demo12),
    children: [
      { path: 'setting', component: SettingComponent },
      {
        path: 'panel/:tab',
        loadComponent: () => import('./demo/12-demo/components/componentComm').then((m) =>m.PanelPage),
      },
      {
        path: 'item/:id',
        loadComponent: () => import('./demo/12-demo/components/componentComm').then((m) =>m.ItemPage),
      }
    ]
  },
  {
    path: 'demo12/lazy',
    title: '路由懒加载',
    loadChildren: () => import('./demo/12-demo/lazy-routes').then((m) => m.LAZY_ROUTES),
  },
  {
    path: 'demo12/protected',
    title: '路由守卫',
    canActivate: [loginGuard],
    loadComponent: () => import('./demo/12-demo/protected-page').then((m) => m.ProtectedPage),
  },
  {
    path: 'demo12/:id',
    title: '路由',
    loadComponent: () => import('./demo/12-demo/12-demo').then((m) => m.Demo12),
  },
  {
    path: 'demo13',
    title: 'HTTP',
    loadComponent: () => import('./demo/13-demo/13-demo').then((m) => m.Demo13),
  },
  {
    path: 'demo14',
    title: '表单',
    loadComponent: () => import('./demo/14-demo/14-demo').then((m) => m.Demo14),
  },
  {
    path: 'demo15',
    title: '进阶API',
    loadComponent: () => import('./demo/15-demo/15-demo').then((m) => m.Demo15),
  },
  { path: '**', redirectTo: '' },
];
