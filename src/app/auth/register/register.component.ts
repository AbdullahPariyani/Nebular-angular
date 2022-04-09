/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FORM_DATA } from '../../shared/utils/data.constant';
import { HttpService } from '../../shared/utils/http.service';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent {
  registrationForm = FORM_DATA.REGISTRATION_FORM;

  constructor(public httpService: HttpService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void { }

  onSubmit(form: any) {
    console.log(form.value);
  }

}
