import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FunctionAppComponent } from './azure-forms/function-app/function-app.component';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: FunctionAppComponent,
  },
  {
    path: 'functional-app',
    // canActivate: [AuthGuard],
    component: FunctionAppComponent,
  },
  {
    path: 'demo-form',
    // canActivate: [AuthGuard],
    component: AngularFormComponent
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
