import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    // {
    //   titleKey: 'app_nav_add',
    //   path: '/add-details'
    // },
    {
      titleKey: 'app_nav_test',
      path: '/test'
    }
    // {
    //   titleKey: 'app_nav_edit',
    //   path: '/edit-details'
    // }
  ];
}
