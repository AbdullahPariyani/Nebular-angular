import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbContextMenuModule, NbUserModule, NbSpinnerModule, NbInputModule, NbRadioModule, NbSelectModule, NbButtonModule, NbStepperModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NebularFormlyModule } from 'ngx-nebular-formly';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	imports: [
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
		NbStepperModule,
		ReactiveFormsModule,
		FormlyBootstrapModule,
		FormsModule,
		NbInputModule,
		FormlyModule.forRoot(),
		HttpClientModule,
		NbSpinnerModule,

	],
	exports: [
		BrowserAnimationsModule,
		NbThemeModule,
		NebularFormlyModule,
		NbSidebarModule,
		NbCardModule,
		NbMenuModule,
		NbLayoutModule,
		NbIconModule,
		NbContextMenuModule,
		NbEvaIconsModule,
		NbUserModule,
		NbRadioModule,
		NbButtonModule,
		NbSelectModule,
		NbStepperModule,
		ReactiveFormsModule,
		FormlyBootstrapModule,
		FormsModule,
		NbInputModule,
		FormlyModule,
		HttpClientModule,
		NbSpinnerModule,
	]
})
export class SharedModule { }
