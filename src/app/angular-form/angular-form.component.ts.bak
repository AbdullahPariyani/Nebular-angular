import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];
  isFormLoad = false;

  constructor(
    private httpService: HttpService
  ) {
    this.httpService.httpGet('getFormData').subscribe(data => {
      this.isFormLoad = true;
      this.fields = data;
      console.log(data);
    });
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}