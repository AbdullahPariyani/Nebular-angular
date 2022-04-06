import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbContextMenuModule, NbUserModule, NbSpinnerModule, NbInputModule, NbRadioModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CommonModule } from '@angular/common';
import { NebularFormlyModule } from 'ngx-nebular-formly';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { FunctionAppComponent } from './azure-forms/function-app/function-app.component';
import { HeaderComponent } from './shared/component/header/header.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    AngularFormComponent,
    FunctionAppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NebularFormlyModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbIconModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbUserModule,
    NbRadioModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormsModule,
    NbInputModule,
    FormlyModule.forRoot(),
    HttpClientModule,
    NbSpinnerModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
         
          baseEndpoint: 'http://example.com/app-api/v1',
          login: {
            endpoint: '/auth/sign-in',
            method: 'post',
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
