import { Component, signal} from '@angular/core';
import {
    form,
    FormField,
    debounce,
    required,
    validateHttp,
    minLength,
    email,
    validate,
    submit
} from '@angular/forms/signals';
import { CheckName, ResultResponse, Signup } from '../../../../../shared/types';
import { JsonPipe } from '@angular/common';
/**
 * 表单校验
 *
 * 1. required: 必填
 * 2. minLength: 最小长度
 * 3. email: 邮件格式
 * 4. validate: 自定义验证
 *
 *
 * */
@Component({
    selector: 'component-comm',
    imports: [FormField, JsonPipe],
    templateUrl: './html/component-form-valid.html',
})
export class ComponentComm {
    model = signal<Signup>({
        username: '',
        email: '',
        note: ''
    });
    submitResult = signal('还没提交');
    f = form(this.model, (path) => {
        required(path.username, { message: '用户名必填' });
        minLength(path.username, 3, { message: '至少 3 个字符' });
        email(path.email, { message: '邮箱格式不对' });
        validate(path.note, ({ value })=>
           value().includes('广告') ? { kind: 'spam', message: '备注里面不能出现广告' } : undefined
        )
    });

    async doSubmit() {
        await submit(this.f, {
            action: async () => {
                this.submitResult.set('提交成功：' + this.model().username);
                return undefined;
            },
            onInvalid: () => this.submitResult.set('校验没过，submit() 拦下了'),
        })
    }

}