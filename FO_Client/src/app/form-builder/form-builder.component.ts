import { Component, OnInit, ViewChild } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { FORM_DATA, FORM_TYPE } from '../shared/utils/data.constant';
import { HttpService } from '../shared/utils/http.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  stepperIndex: number = 0;
  isFormLoad: boolean = false;
  index: any = 0;
  formName = "Create Function App";
  btnTitle = "Next";
  @ViewChild('stepper') stepper: any;
  logicalPositions = NbGlobalLogicalPosition;

  initForm = FORM_DATA.INIT_FORM;
  functionForm = FORM_DATA.FUNCTIONAL_FORM;
  sqlForm = FORM_DATA.SQL_FORM;
  consmoForm = FORM_DATA.COSMOS_FORM;
  storageAccount = FORM_DATA.STORAGE_ACCOUNT;

  initFormValue: any = [];
  functionFormValue: any = null;
  sqlFormValue: any = null;
  consmoFormValue: any = null;
  storageAccountValue: any = null;
  formType = FORM_TYPE;

  constructor(
    public httpService: HttpService,
    private toastrService: NbToastrService
  ) {
    this.formType.FUNCTIONAL_FORM;
    this.httpService.httpGet('list/cloudProviders').subscribe(data => {
      this.initForm[0].templateOptions.options = data;
      this.initForm[3].templateOptions.options = this.httpService.locationArray;
    });
    this.httpService.httpGet('list/location/624eafb36e91c473f6f9e080').subscribe(data => {
      this.sqlForm[0].templateOptions.options = this.functionForm[6].templateOptions.options = this.initForm[3].templateOptions.options = this.httpService.locationArray = data;
    });
  }

  ngOnInit(): void { }

  onSubmit(data: any) {
    switch (data.formType) {
      case FORM_TYPE.INIT_FORM:
        this.initFormValue = data.form.value;
        this.next();
        break;
      case FORM_TYPE.FUNCTIONAL_FORM:
        this.functionFormValue = data.form.value;
        this.next();
        break;
      case FORM_TYPE.COSMOS_FORM:
        this.consmoFormValue = data.form.value;
        this.next();
        break;
      case FORM_TYPE.SQL_FORM:
        this.sqlFormValue = data.form.value;
        this.next();
        break;
      case FORM_TYPE.STORAGE_ACCOUNT:
        this.storageAccountValue = data.form.value;
        this.next();
        break;
      default:
        break;
    }
  }

  isStepAccessible(findValue: string) {
    if (this.initFormValue?.resourceService && this.initFormValue?.resourceService.length > 0) {
      return this.initFormValue?.resourceService.includes(findValue);
    } else {
      return false;
    }
  }

  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  generateForm() {
    let dataValue: any = {
      rg: {
        name: this.initFormValue.name, location: this.initFormValue.location
      }
    }

    if (this.functionFormValue) {
      dataValue['function_app'] = this.functionFormValue;
      dataValue['storage_account'] = {
        name: this.storageAccountValue ? this.storageAccountValue.storageAccount : this.functionFormValue.storageAccountName
      }
      dataValue['service_plan'] = {
        name: this.functionFormValue.serviceName
      }
      dataValue['application_insights'] = {
        application_type: this.functionFormValue.application_type,
        name: this.functionFormValue.applicationInsights,
      }
    }

    if (this.consmoFormValue) {
      dataValue['cosmos_db'] = this.consmoFormValue;
    }

    if (this.sqlFormValue) {
      dataValue['sql'] = this.sqlFormValue;
    }

    this.httpService.httpClient.post(`http://20.20.1.224:6633/terraform/generate-terraform`, { services: dataValue }, { responseType: 'text' }).subscribe((data: any) => {
      debugger
      const downloadLink = document.createElement('a');
      downloadLink.download = 'Generated_form';
      downloadLink.href = `http://20.20.1.224:6633${JSON.parse(data).path}`;
      downloadLink.click();
    });
  }
}
