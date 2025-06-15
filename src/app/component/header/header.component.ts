import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isUserMenuOpened : boolean = false;

  toggleMenu() {
   this.isUserMenuOpened = !this.isUserMenuOpened;
  }
  // activeTab: string = 'dashboard';
  //
  // constructor(private router: Router) {
  //   this.router.events
  //     .pipe(
  //       filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
  //     )
  //     .subscribe((event) => {
  //     const url = event.urlAfterRedirects;
  //     if (url.includes('dashboard')) this.activeTab = 'dashboard';
  //     else if (url.includes('additional-settings')) this.activeTab = 'additional-settings';
  //     else this.activeTab = 'dashboard';
  //   });
  // }
  //
  // setActiveTab(activeTab: string) {
  //   this.activeTab = activeTab;
  // }
}
