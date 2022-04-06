import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FlowOps';
  constructor() { }

  ngOnInit() { }
}
