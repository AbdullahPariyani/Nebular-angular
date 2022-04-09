import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FORM_DATA, FORM_TYPE } from '../shared/utils/data.constant';
import { HttpService } from '../shared/utils/http.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  isFormLoad: boolean = false;
  index: any = 0;
  formName = "Create Function App";
  btnTitle = "Next";

  initForm = FORM_DATA.INIT_FORM;
  functionForm = FORM_DATA.FUNCTIONAL_FORM;
  sqlForm = FORM_DATA.SQL_FORM;
  consmoForm = FORM_DATA.COSMOS_FORM;
  formType = FORM_TYPE;

  constructor(public httpService: HttpService, private route: ActivatedRoute) {
    this.formType.FUNCTIONAL_FORM
  }

  ngOnInit(): void { }

  onSubmit(data: any) {
    console.log(data.form.value, data.formType);
  }

}
