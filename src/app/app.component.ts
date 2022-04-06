import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-new-project';
  isToggled: boolean = false;
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
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  toggle() {
    this.isToggled = !this.isToggled;
    this.sidebarService.toggle(true);
    return false;
  }
}
