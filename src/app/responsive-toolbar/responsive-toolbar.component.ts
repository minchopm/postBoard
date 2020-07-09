import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/_models';
import { Router } from '@angular/router';
import { AccountService } from '@app/services';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {
  user;
  /*<nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="navbar-nav">
    <a class="nav-item nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a class="nav-item nav-link" routerLink="/users" routerLinkActive="active">Users</a>
      <a class="nav-item nav-link" (click)="logout()">Logout</a>
      </div>
      </nav>*/
  menuItems: MenuItem[] = [
    {
      label: 'Board',
      icon: 'notes',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      action: () => {
        this.router.navigate(['']);
      }
    },
    {
      label: 'Logout',
      icon: 'power_settings_new',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      action: () => {
        this.accountService.logout();
      }
    },
    {
      label: 'Users',
      icon: 'person',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      action: () => {
        this.router.navigate(['users']);
      }
    }, {
      label: 'Account',
      icon: 'person',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      action: () => {
        this.router.navigate(['users']);
      }
    },
  ];

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

}
