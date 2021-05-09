import { ButtonConfig, InputConfig } from '../../../shared/models/shared.model';

export class LoginConstants {
    static readonly emailConfig: InputConfig = {
        placeholder: 'Email',
        icon: 'person-outline',
        type: 'email',
        name: 'email',
    };
    static readonly passwordConfig: InputConfig = {
        placeholder: 'Contraseña',
        icon: 'lock-closed-outline',
        type: 'password',
        name: 'password',
        autocomplete: 'password',
    };
    static readonly buttonConfig: ButtonConfig = {
        disabled: false,
        text: 'Acceder',
        type: 'submit',
    };
    static readonly loginButton = 'Acceder';
    static readonly customErrors = {
        email: 'El campo debe ser un email.',
        required: 'El campo es requerido.',
        minlength:
            'La contraseña debe tener una longitud mínima de 5 carácteres.',
    };
}
