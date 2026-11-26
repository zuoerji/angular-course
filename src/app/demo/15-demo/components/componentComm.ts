import {
    Component,
    LOCALE_ID,
    inject,
    signal,
    input,
    ComponentRef,
    viewChild,
    ElementRef,
    ViewContainerRef
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/**
 *
 *  bypassSecurityTrustHtml: 默认清洗会去掉 onclick 和 <script>
 * */

@Component({
    selector: 'component-child',
    template: `<div class="child-label" (click)="onClick()"> {{ label() }} </div>`,
    styles: [
        `.child-label {
            padding: 20px 40px;
            border: 1px solid #ccc;
        }
        `
    ]
})
class ComponentChild {
    label = input('未命名');
    onClick() {
        console.log(this.label());
    }
}

const HTML =
    `<p > html 字符串 生成的 <span id="box">点击</span> <script data-evil="2">
       const box = document.querySelector('#box');
       console.log(box,'===box===');
       box.onclick = () => {
           console.log('box')
       }
</script> </p>`

@Component({
    selector: 'component-comm',
    templateUrl: './html/component-comm.html',
    styleUrl: './css/index.css',
})
export class ComponentComm {
    trusted: SafeHtml;
    refs = signal<ComponentRef<ComponentChild>[]>([]);
    vcr = viewChild.required('host', { read: ViewContainerRef });
    id = signal(0);
    raw = HTML;


    constructor(sanitizer: DomSanitizer) {
        this.trusted = sanitizer.bypassSecurityTrustHtml(HTML);
    }

    add() {
        const ref = this.vcr().createComponent(ComponentChild);
        const n = this.id() + 1;
        ref.setInput('label',`第 ${n} 个`);
        this.id.set(n);
        this.refs.update(l => [...l, ref]);
    }

    destroyLast() {
        const list = this.refs();
        const last = list[list.length - 1];
        if (!last) return;
        last.destroy();
        this.refs.set(list.slice(0, -1));
    }
}