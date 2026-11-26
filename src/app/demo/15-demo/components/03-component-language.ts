import {Component, LOCALE_ID, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de';
import localJa from '@angular/common/locales/ja';
import localZh from '@angular/common/locales/zh';

registerLocaleData(localDe, 'de-DE');
registerLocaleData(localJa, 'ja-JP');
registerLocaleData(localZh, 'zh-Hans');

/**
 *
 *
 * */


@Component({
    selector: 'component-comm',
    imports: [DatePipe],
    templateUrl: './html/component-language.html',
    styleUrl: './css/index.css',
})
export class ComponentComm {
    locales = [
        { id: 'en-US', label: 'en-US 英语' },
        { id: 'zh-Hans', label: 'zh-Hans 中文' },
        { id: 'de-DE', label: 'de-DE 德语' },
        { id: 'ja-JP', label: 'ja-JP 日语' },
    ];
    locale = signal('en-US');
    date = new Date();
}