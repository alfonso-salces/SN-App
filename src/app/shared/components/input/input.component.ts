import {
    Component,
    ElementRef,
    forwardRef,
    Input,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputConfig } from '../../models/shared.model';

@Component({
    selector: 'sn-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    @ViewChild('input') inputElement: ElementRef;
    @Input() hasValidationError: boolean;
    @Input() config: InputConfig = {
        icon: '',
        name: '',
        placeholder: '',
        type: 'text',
    };
    isDisabled = false;
    private value = '';
    onTouch: any = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    setInputFocus() {
        this.inputElement.nativeElement.focus();
    }

    writeValue(value): void {
        if (value) {
            this.value = value;
            this.onChange(value);
            this.onTouch(value);
        }
    }

    private onChange: any = () => {};
}
