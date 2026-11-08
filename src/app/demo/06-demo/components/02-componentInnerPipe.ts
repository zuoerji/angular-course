import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

/**
 * number:'1.2-3'
 * 1: 整数部分至少显示 1 位
 * 2-3: 小数位最少显示 2 位,最多显示 3 位
 * 
 * percent:'1.1-2'
 * 1: 整数部分至少显示 1 位
 * 1-2: 小数位最少显示 1 位,最多显示 2 位
 * 
 * currency:'CNY' 
 * 人民币: CNY
 * 美元: USD
 * 欧元: EUR
 * 日元: JPY
 * 
*/

@Component({
  selector: 'component-comm',
  imports: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    KeyValuePipe,
  ],
  templateUrl: './html/component-inner-pipe.html',
})
export class ComponentComm {
  protected readonly obj = { name: 'Angular', ver: 22 };
}