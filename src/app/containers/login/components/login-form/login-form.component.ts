import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { LoginConstants } from '../../constants/login.constants';
import { LoginForm } from '../../models/login.model';

@Component({
    selector: 'sn-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    @Output() formSending: EventEmitter<LoginForm> = new EventEmitter();
    loginForm: FormGroup;
    loginConstants = LoginConstants;
    canCheckErrors = false;

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            remember: new FormControl(false),
        });
    }

    hasInputError(field: string): boolean {
        if (this.canCheckErrors && this.loginForm.controls[field]) {
            const { dirty, invalid, touched } = this.loginForm.controls[field];
            return invalid && touched && dirty;
        }
        return false;
    }

    getFirstErrorFound(field: string): string {
        const { errors } = this.loginForm.get(field);
        return (
            errors && this.loginConstants.customErrors[Object.keys(errors)[0]]
        );
    }

    emitForm(): void {
        this.canCheckErrors = true;
        if (this.loginForm.valid) {
            this.formSending.emit(this.loginForm.value);
        }
    }
}
