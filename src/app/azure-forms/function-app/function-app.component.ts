import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
