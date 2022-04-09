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
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AuthGuard } from './shared/utils/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: FormBuilderComponent,
  },
  {
    path: 'forms',
    // canActivate: [AuthGuard],
    component: FormBuilderComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
