import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginForm } from './models/login.model';
import { fadeInOut } from '../../shared/animations/animations';

@Component({
    selector: 'sn-login',
    templateUrl: './login.container.html',
    styleUrls: ['./login.container.scss'],
    animations: [fadeInOut],
    // Aplico detección de cambios solo compruebe los cambios una vez y con esto mejore el rendimiento de la app
    // (También aplica para los componentes hijos en el árbol de componentes de Angular).
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainer {
    sendForm(form: LoginForm): void {
        console.log(form);
        console.log('OK!');
    }
}
