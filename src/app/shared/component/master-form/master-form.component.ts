import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpService } from '../../utils/http.service';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.scss']
})
export class MasterFormComponent implements OnInit {

  @Input() isFormLoad: boolean = false;

  form = new FormGroup({});
  @Input() model: any = {};
  @Input() formName: any = {};
  @Input() options: FormlyFormOptions = {};
  @Input() fields: FormlyFieldConfig[] = [];
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }
    this.onSubmit.emit(this.form);
  }

}
