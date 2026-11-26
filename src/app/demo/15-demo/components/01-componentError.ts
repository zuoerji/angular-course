import {Component, ErrorHandler, inject, signal} from '@angular/core';
import { ERROR_LOG } from '../../../error/errorHandler';
import { JsonPipe } from '@angular/common';

/**
 * 1. 注入 ErrorHandler
 * 2. 改 ErrorHandler 使用 useClass, 在 app.config.ts 里面注入
 *
 * */

@Component({
    selector: 'component-comm',
    imports: [JsonPipe],
    templateUrl: './html/component-error.html',
})
export class ComponentComm {
    count = signal(0);
    log = ERROR_LOG;
    handler = inject(ErrorHandler);


    throwHandle() {
        throw new Error('来自事件处理器');
    }
    reportHandle() {
        this.handler.handleError(new Error('手动上报错'));
    }
    add() {
        this.count.update(n => n + 1);
    }
}