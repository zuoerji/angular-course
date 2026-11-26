import { Component, signal} from '@angular/core';
import { form, FormField, debounce, required, validateHttp } from '@angular/forms/signals';
import { CheckName, ResultResponse } from '../../../../../shared/types';
import { JsonPipe } from '@angular/common';
/**
 * 表单状态
 * 1. value(): 当前值, 受到防抖影响
 * 2. controlValue() : 即时值,不受防抖延迟影响
 * 3. valid() : 校验是否通过
 * 4. inValid(): 是否存在校验错误
 * 5. pending(): 进行中
 * 6. errors(): 错误信息数组
 * 7. touched(): 是否聚焦并失焦
 * 8. dirty(): 是否改动过
 * 9. disabled(): 是否被禁用
 * 10. readonly(): 是否只读
 * 11. hidden(): 是否被隐藏
 *
 * */
@Component({
    selector: 'component-comm',
    imports: [FormField, JsonPipe],
    templateUrl: './html/component-form-status.html',
})
export class ComponentComm {
    model = signal({
        info: {  name: '张三', city: '北京' },
    });
    f = form(this.model, (path) => {
        debounce(path.info.name, 'blur');
        required(path.info.name, { message: '名字不能为空!' });
        validateHttp<string, ResultResponse<CheckName>>(path.info.name, {
            request: ({ value }) => {
                const name = value();
                console.log(name, '====name====fo')
                if (!name) return undefined;
                return `/api/check-username?name=${encodeURIComponent(name)}`;
            },
            onSuccess: (res) => res.data.available ? undefined : { kind: 'taken', message: '这个名字被占用了' },
            onError: () => ({ kind: 'server', message: '服务器错误' })
        })
    });

    changeName() {
        this.f.info.name().value.set('李四');
    }

}