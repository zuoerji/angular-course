import {Component, inject, Injectable, InjectionToken, signal, input } from '@angular/core';
import { LOG, addLog } from '../log';
/**
 * 依赖注入
 * provideEnvironmentInitializer
 * 1. 读配置
 * 2. 初始化
 * 在 app.config.ts 中引入 provideEnvironmentInitializer
 *
 * */

@Component({
  selector: 'component-comm',
  templateUrl: './html/component-init.html'
})
export class ComponentComm {
  log = LOG;

  addLog = addLog;
}