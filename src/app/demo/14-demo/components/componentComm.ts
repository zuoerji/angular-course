import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'component-comm',
    imports: [ReactiveFormsModule],
    templateUrl: './html/component-comm.html',
})
export class ComponentComm {
    submitResult = '还没提交';

    // 1. 用 FormGroup 代替 signal<Signup>
    f = new FormGroup({
        username: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(3)],
        }),
        email: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required,Validators.email],
        }),
        note: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, noSpam],
        }),
    });

    get controls() {
        return this.f.controls;
    }

    // 2. 自定义校验器：返回 ValidationErrors | null
    //    对应你 signal 版里的 validate(path.note, ...)
    // noSpam 定义在组件外部（见下）

    async doSubmit() {
        // 3. 手动拦截：对应 submit() 的 onInvalid
        console.log(this.f, '===invalid');
        console.log(this.f.controls.username.hasError, '===invalid');
        if (this.f.invalid) {
            this.submitResult = '校验没过，submit() 拦下了';
            this.f.markAllAsTouched(); // 让错误信息显示出来
            return;
        }
        // 对应 action
        this.submitResult = '提交成功：' + this.f.controls.username.value;
    }

    changeName() {
        this.f.controls.username.setValue('李四');
    }
}

// 自定义校验器函数（同步）
function noSpam(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('广告')
        ? { spam: '备注里面不能出现广告' }
        : null;
}