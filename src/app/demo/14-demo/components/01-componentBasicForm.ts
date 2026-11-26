import {Component, signal} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
/**
 * 基础表单
 *
 * */

@Component({
    selector: 'component-comm',
    imports: [FormField],
    templateUrl: './html/component-basic-form.html',
})
export class ComponentComm {
    model = signal({ name: '张三' });
    f = form(this.model);

    changeName() {
        this.f.name().value.set('李四')
    }

    modelChangeName() {
        this.model.update((m) => ({...m, name:'王五'}))
    }
}