import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
