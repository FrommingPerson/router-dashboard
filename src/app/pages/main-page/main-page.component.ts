import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route } from '../../models/Route';
import { Subscription } from 'rxjs';
import { RouteService } from '../../../../Services/route.service';
import { RoutesResponse } from '../../models/Routes-response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit, OnDestroy {
  routesResponse: RoutesResponse | null = null;
  private subscriptions = new Subscription();

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.subscriptions.add(this.routeService.routesResponse$.subscribe((routesResponse) => {
      this.routesResponse = routesResponse;
      console.log(this.routesResponse?.pageSize);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
