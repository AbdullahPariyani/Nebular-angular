import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { HttpService } from '../../utils/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'my-new-project';
  selectedTheme = 'default';
  menuItems = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  themeOptions = [{
    value: 'dark',
    text: 'Dark'
  }, {
    value: 'default',
    text: 'Light'
  }, {
    value: 'cosmic',
    text: 'Cosmic'
  }, {
    value: 'corporate',
    text: 'Corporate'
  }];

  constructor(
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    public httpService: HttpService,
    private themeService: NbThemeService
  ) {
    this.themeService.changeTheme(this.selectedTheme);
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => { });
  }

  changeTheme(event: any) {
    this.themeService.changeTheme(this.selectedTheme);
  }
}
