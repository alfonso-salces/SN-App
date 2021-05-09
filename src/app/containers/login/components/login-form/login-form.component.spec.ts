import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginFormComponent } from './login-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let formBuilder: FormBuilder;
    const formGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
        ]),
        remember: new FormControl(false),
    });

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LoginFormComponent],
                imports: [
                    IonicModule.forRoot(),
                    SharedModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                providers: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(LoginFormComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            formBuilder = fixture.debugElement.injector.get(FormBuilder);
            spyOn(formBuilder, 'group').and.callFake(() => formGroup);
        })
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('buildForm method generate form successfully', () => {
        const spy = spyOn(component, 'buildForm').and.callFake(() => null);
        component.buildForm();
        expect(spy).toHaveBeenCalled();
        expect(component.loginForm).toBeDefined();
    });

    it('hasInputError return false if cant checkErrors', () => {
        const spy = spyOn(component, 'hasInputError').and.callThrough();
        component.canCheckErrors = false;
        const hasInputError = component.hasInputError('email');
        expect(spy).toHaveBeenCalled();
        expect(hasInputError).toBeFalse();
    });

    it('hasInputError validate form and return true', () => {
        const spy = spyOn(component, 'hasInputError').and.callThrough();
        component.canCheckErrors = true;
        const emailControl = component.loginForm.get('email');
        emailControl.setValue('emailinválido');
        emailControl.markAllAsTouched();
        emailControl.markAsDirty();
        const hasInputError = component.hasInputError('email');
        expect(spy).toHaveBeenCalled();
        expect(hasInputError).toBeTrue();
    });

    it('hasInputError validate form and return true', () => {
        const spy = spyOn(component, 'hasInputError').and.callThrough();
        component.canCheckErrors = true;
        const emailControl = component.loginForm.get('email');
        emailControl.setValue('email@valido');
        emailControl.markAllAsTouched();
        emailControl.markAsDirty();
        const hasInputError = component.hasInputError('email');
        expect(spy).toHaveBeenCalled();
        expect(hasInputError).toBeFalse();
    });

    it('getFirstErrorFound returns invalid email text', () => {
        const spy = spyOn(component, 'getFirstErrorFound').and.callThrough();
        const emailControl = component.loginForm.get('email');
        emailControl.setValue('emailinválido');
        const getFirstErrorFound = component.getFirstErrorFound('email');
        expect(spy).toHaveBeenCalled();
        expect(getFirstErrorFound).toEqual('El campo debe ser un email.');
    });

    it('emitForm emits form if is valid', () => {
        const spyEmitForm = spyOn(component, 'emitForm').and.callThrough();
        const spyFormSending = spyOn(
            component.formSending,
            'emit'
        ).and.callThrough();
        const emailControl = component.loginForm.get('email');
        const passControl = component.loginForm.get('password');
        emailControl.setValue('email@valido');
        passControl.setValue('passválida');
        component.emitForm();
        const formValue = {
            email: 'email@valido',
            password: 'passválida',
            remember: false,
        };
        expect(spyEmitForm).toHaveBeenCalled();
        expect(spyFormSending).toHaveBeenCalledWith(
            jasmine.objectContaining(formValue)
        );
    });

    it('emitForm dont emits form if is invalid', () => {
        const spyEmitForm = spyOn(component, 'emitForm').and.callThrough();
        const spyFormSending = spyOn(
            component.formSending,
            'emit'
        ).and.callThrough();
        const emailControl = component.loginForm.get('email');
        const passControl = component.loginForm.get('password');
        emailControl.setValue('emailinvalido');
        passControl.setValue('passválida');
        component.emitForm();
        expect(spyEmitForm).toHaveBeenCalled();
        expect(spyFormSending).not.toHaveBeenCalled();
    });
});
