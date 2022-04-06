import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-function-app',
  templateUrl: './function-app.component.html',
  styleUrls: ['./function-app.component.scss']
})
export class FunctionAppComponent implements OnInit {
  isFormLoad: boolean = false;

  selectedPublish: any = 'code';
  selectedRuntimeItem = '2';
  selectedApplicationInsights = 'no';

  formData!: FormGroup;
  languageText: string = '';
  languages: any = [];

  runTimeStackOptions = [{
    value: 'NET',
    text: '.NET'
  }, {
    value: 'node',
    text: 'Node.js'
  }, {
    value: 'Python',
    text: 'Python'
  }, {
    value: 'Java',
    text: 'Java'
  }, {
    value: 'PHP',
    text: 'PHP'
  }, {
    value: 'PowershellCore',
    text: 'Powershell Core'
  }, {
    value: 'CustomHandler',
    text: 'Custom Handler'
  }];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formData = this.fb.group({
      appName: ['', [Validators.required, Validators.maxLength(20)]],
      publisher: ['code', [Validators.required]],
      runTimeStack: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.formData);
    if (!this.formData.valid) {
      this.formData.markAllAsTouched();
    }
  }

}
