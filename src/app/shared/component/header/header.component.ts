import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { HttpService } from '../../../http.service';

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
    this.themeService.changeTheme('corporate');
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

  items: NbMenuItem[] = [
    {
      title: 'Demo From',
      icon: 'bar-chart-outline',
      link: 'demo-form'
    }, {
      title: 'Login',
      icon: 'person-outline',
      link: 'auth/login'
    },
    {
      title: 'Register',
      icon: 'person-add-outline',
      link: 'auth/register'
    },
    {
      title: 'Forgot',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: 'auth/forgot'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: 'auth/logout'
    },
  ];

  toggle() {
    this.httpService.isToggled = !this.httpService.isToggled;
    this.sidebarService.toggle(true);
    return false;
  }
}
