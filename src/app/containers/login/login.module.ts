import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginContainer } from './login.container';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginContainer,
    LoginFormComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginModule {}
