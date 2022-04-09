import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FORM_DATA } from '../shared/utils/data.constant';
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

  fields = [
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
        "inline": true,
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
            value: '16LTS',
            label: '16 LTS',
          },
          {
            value: '14LTS',
            label: '14 LTS',
          }, {
            value: '12LTS',
            label: '12 LTS',
          }
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
        "inline": true,
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
        options: [{
          value: 'FunctionsPremium',
          label: 'Functions Premium',
        }, {
          value: 'AppServicePlan',
          label: 'App service plan',
        }, {
          value: "Consumption",
          label: "Consumption "
        }],
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

  constructor(public httpService: HttpService, private route: ActivatedRoute) {
    this.fields = this.httpService.formData[0];
  }

  ngOnInit(): void { }

  onSubmit(form: any) {
    console.log(form.value);
  }

}
