import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Episode = {
  path: string;
  code: string;
  title: string;
  takeaway: string;
  level: string;
};



@Component({
  selector: 'app-home',
  template: `
    <h1 class="page-title">Angular 22 · API 遍历 Demo</h1>
  `,
})
export class Home {}
