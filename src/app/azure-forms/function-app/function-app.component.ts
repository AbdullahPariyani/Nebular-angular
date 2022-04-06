import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-function-app',
  templateUrl: './function-app.component.html',
  styleUrls: ['./function-app.component.scss']
})
export class FunctionAppComponent implements OnInit {
  isFormLoad: boolean = false;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'appName',
      templateOptions: {
        label: 'Function App Name',
        placeholder: 'Function App Name',
        required: true,
        maxLength: 30,
      },
    },
    {
      key: 'publish',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Publish',
        placeholder: 'Select publish',
        required: true,
        name: 'publish',
        options: [
          { value: 'Code', key: 'code', checked: true },
          { value: 'Docker', key: 'docker' },
        ],
      },
    },
    {
      key: 'runTimeStack',
      type: 'select',
      hideExpression: 'model.publish == "docker"',
      templateOptions: {
        required: true,
        placeholder: 'Select Runtime Stack',
        label: 'Runtime stack ',
        options: [
          {
            value: 'NET',
            label: '.NET',
          },
          {
            value: 'node',
            label: 'Node.js',
          },
          {
            value: 'Python',
            label: 'Python',
          },
          {
            value: 'Java',
            label: 'Java',
          },
          {
            value: 'PHP',
            label: 'PHP',
          },
          {
            value: 'PowershellCore',
            label: 'Powershell Core',
          },
          {
            value: 'CustomHandler',
            label: 'Custom Handler',
          },
        ],
      },
    },
    {
      key: 'version',
      type: 'select',
      hideExpression: 'model.publish == "docker"',
      templateOptions: {
        required: true,
        label: 'Version',
        placeholder: 'Select Version',
        options: [
          {
            value: 'Version1',
            label: 'version 1',
          },
          {
            value: 'Version2',
            label: 'version 2',
          },
        ],
      },
    },
    {
      key: 'region',
      type: 'select',
      templateOptions: {
        required: true,
        placeholder: 'Select Region',
        label: 'Region',
        options: [
          {
            value: 'India',
            label: 'india',
          },
          {
            value: 'Japan',
            label: 'Japan',
          },
        ],
      },
    },
    {
      key: 'platform',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Platform',
        required: true,
        name: 'platform',
        placeholder: 'Select Platform',
        options: [
          { value: 'Linux', key: 'linux' },
          { value: 'Windows', key: 'windows' },
        ],
      },
    },
    {
      key: 'planType',
      type: 'select',
      templateOptions: {
        required: true,
        placeholder: 'Select Plan type',
        label: 'Plan Type',
        options: [
          {
            value: 'Free',
            label: 'Free',
          },
          {
            value: 'Paid',
            label: 'Paid',
          },
        ],
      },
    },
    {
      key: 'linuxType',
      type: 'select',
      templateOptions: {
        placeholder: 'Select Linux type',
        required: true,
        label: 'Linux Plan (Australia Central)',
        options: [
          {
            value: 'Free',
            label: 'Free',
          },
          {
            value: 'Paid',
            label: 'Paid',
          },
        ],
      },
    },
    {
      key: 'applicationInsights',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Enable Application Insights',
        required: true,
        name: 'applicationInsights',
        defaultValue: 'no',
        options: [
          { value: 'No', key: 'no' },
          { value: 'Yes', key: 'yes' },
        ],
      },
    },
    {
      key: 'applicationInsightsSelect',
      type: 'select',
      hideExpression: 'model.applicationInsights == "no"',
      templateOptions: {
        required: true,
        label: 'Application Insight',
        placeholder: 'Select Application Insight',
        options: [
          {
            value: 'Free',
            label: 'Free',
          },
          {
            value: 'Paid',
            label: 'Paid',
          },
        ],
      },
    }];

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.form);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }
  }

}
