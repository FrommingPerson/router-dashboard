import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isUserMenuOpened = false;

  readonly title$ = this.router.events.pipe(
    filter(ev => ev instanceof NavigationEnd),
    map(() => this.extractTitle()),
    startWith(this.extractTitle())
  );

  constructor(private router: Router) {}

  toggleMenu() {
    this.isUserMenuOpened = !this.isUserMenuOpened;
  }

  private extractTitle(): string {
    let route = this.router.routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return (
      route.snapshot.data['title'] ??
      route.snapshot.routeConfig?.title ??
      'Dashboard'
    );
  }
}
