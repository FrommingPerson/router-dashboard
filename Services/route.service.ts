import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoutesResponse } from '../src/app/models/Routes-response';
import { v4 as uuidv4 } from 'uuid';
import { Route } from '../src/app/models/Route';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private _routesResponse$ = new BehaviorSubject<RoutesResponse | null>(null);

  get routesResponse$() {
    return this._routesResponse$.asObservable();
  }

  getRoutes(params: { page: number; pageSize: number }) {
    setTimeout(() => {
      const routes = [
        {
          uuid: '49f0a1b2-c3d4-5051-8566-112a3b4c1b1b',
          address: '192.168.4.22',
          mask: '24',
          gateway: '192.168.4.1',
          interface: 'eth0',
        },
        {
          uuid: 'e4f5a6b7-c8d9-4aeb-8f10-1b2c3d4e1515',
          address: '203.0.113.33',
          mask: '24',
          gateway: '203.0.113.1',
          interface: 'wlan1',
        },
        {
          uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          address: '172.16.5.128',
          mask: '16',
          gateway: '172.16.5.1',
          interface: 'wlan0',
        },
        {
          uuid: '710e6f13-49d3-4d8c-a238-9e1091f3a108',
          address: '198.51.100.45',
          mask: '24',
          gateway: '198.51.100.1',
          interface: 'wlan0',
        },
        {
          uuid: 'c2d3e4f5-a6b7-48c9-8d0e-1f2a3b4c1313',
          address: '172.19.20.30',
          mask: '16',
          gateway: '172.19.0.1',
          interface: 'wlan0',
        },
        {
          uuid: '6bf0c2d3-e4f5-5253-8788-132a3b4c1d1d',
          address: '172.21.30.50',
          mask: '16',
          gateway: '172.21.0.1',
          interface: 'wlan0',
        },
        {
          uuid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
          address: '10.20.30.155',
          mask: '8',
          gateway: '10.20.30.1',
          interface: 'eth0',
        },
        {
          uuid: '0b56084b-1c11-4b90-9f4d-0f87fe48e101',
          address: '192.168.2.10',
          mask: '24',
          gateway: '192.168.2.1',
          interface: 'eth0',
        },
        {
          uuid: 'af01a6b7-c8d9-5657-8bcc-172a3b4c2121',
          address: '172.22.35.60',
          mask: '16',
          gateway: '172.22.0.1',
          interface: 'eth1',
        },
        {
          uuid: 'e02fa0e4-01ad-090a-c130-0d05e0008ba0',
          address: '203.0.113.5',
          mask: '24',
          gateway: '203.0.113.1',
          interface: 'wlan1',
        },
        {
          uuid: '57fb5ec6-4e93-43c5-a0d2-6c0bea9bf106',
          address: '10.11.11.11',
          mask: '8',
          gateway: '10.11.11.1',
          interface: 'eth0',
        },
        {
          uuid: '38e9f0a1-b2c3-4f40-8455-102a3b4c1a1a',
          address: '10.50.60.90',
          mask: '8',
          gateway: '10.50.60.1',
          interface: 'eth0',
        },
        {
          uuid: '80c5f0a5-86f6-40a2-b08e-49283fce1109',
          address: '192.168.101.50',
          mask: '30',
          gateway: '192.168.101.1',
          interface: 'lo',
        },
        {
          uuid: '347d7641-df05-4d4c-bb8f-9b276288d104',
          address: '192.0.2.85',
          mask: '30',
          gateway: '192.0.2.1',
          interface: 'eth2',
        },
        {
          uuid: '123e4567-e89b-12d3-a456-426614174000',
          address: '198.51.100.23',
          mask: '24',
          gateway: '198.51.100.1',
          interface: 'wlan0',
        },
        {
          uuid: '6fa459ea-ee8a-3ca4-894e-db77e160355e',
          address: '10.10.10.200',
          mask: '8',
          gateway: '10.10.10.1',
          interface: 'eth0',
        },
        {
          uuid: 'b1c2d3e4-f5a6-47a8-9b0c-1d2e3f4a1212',
          address: '10.3.3.77',
          mask: '8',
          gateway: '10.3.3.1',
          interface: 'eth1',
        },
        {
          uuid: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
          address: '192.0.2.77',
          mask: '30',
          gateway: '192.0.2.1',
          interface: 'eth2',
        },
        {
          uuid: '49f0a1b2-c3d4-5051-8566-112a3b4c1b1b',
          address: '192.168.104.44',
          mask: '24',
          gateway: '192.168.104.1',
          interface: 'eth0',
        },
        {
          uuid: '5af0b1c2-d3e4-5152-8677-122a3b4c1c1c',
          address: '10.2.2.66',
          mask: '8',
          gateway: '10.2.2.1',
          interface: 'eth1',
        },
        {
          uuid: 'f5a6b7c8-d9e0-4bfc-8011-1c2d3e4f1616',
          address: '10.12.12.120',
          mask: '8',
          gateway: '10.12.12.1',
          interface: 'eth0',
        },
        {
          uuid: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          address: '172.31.255.254',
          mask: '16',
          gateway: '172.31.0.1',
          interface: 'eth1',
        },
        {
          uuid: '6a9c4ae2-5163-46e8-9c33-1b2af7d07107',
          address: '172.18.10.20',
          mask: '16',
          gateway: '172.18.0.1',
          interface: 'eth1',
        },
        {
          uuid: 'df04d9e0-f1a2-5960-8eff-1a2a3b4c2424',
          address: '10.40.50.80',
          mask: '8',
          gateway: '10.40.50.1',
          interface: 'eth0',
        },
        {
          uuid: '1d3c6e56-2c55-4ab9-a8f2-5f9c06bcb102',
          address: '10.1.1.50',
          mask: '8',
          gateway: '10.1.1.1',
          interface: 'eth1',
        },
        {
          uuid: 'd3e4f5a6-b7c8-49da-8e0f-1a2b3c4d1414',
          address: '192.0.2.93',
          mask: '30',
          gateway: '192.0.2.1',
          interface: 'eth2',
        },
        {
          uuid: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          address: '192.168.1.42',
          mask: '24',
          gateway: '192.168.1.1',
          interface: 'eth0',
        },
        {
          uuid: '910fafa5-55bb-4a7c-bc66-29f4cbe72525',
          address: '203.0.113.77',
          mask: '24',
          gateway: '203.0.113.1',
          interface: 'wlan1',
        },
        {
          uuid: '05b6c7d8-e9f0-4c1d-8122-1d2e3f4a1717',
          address: '172.20.25.40',
          mask: '16',
          gateway: '172.20.0.1',
          interface: 'eth1',
        },
        {
          uuid: '27d8e9f0-a1b2-4e3f-8344-1f2a3b4c1919',
          address: '192.168.102.25',
          mask: '30',
          gateway: '192.168.102.1',
          interface: 'lo',
        },
        {
          uuid: 'c2b1a087-33aa-4faa-84e2-414d5cde2626',
          address: '10.60.70.100',
          mask: '8',
          gateway: '10.60.70.1',
          interface: 'eth0',
        },
        {
          uuid: 'b2d1e3f4-5062-4a9e-9c7d-31fdbeae2727',
          address: '198.51.100.99',
          mask: '24',
          gateway: '198.51.100.1',
          interface: 'wlan0',
        },
        {
          uuid: '6bf3cee4-63f4-490e-9d4e-321fafd72828',
          address: '203.0.113.55',
          mask: '24',
          gateway: '203.0.113.1',
          interface: 'wlan1',
        },
        {
          uuid: '550e8400-e29b-41d4-a716-446655440000',
          address: '192.168.100.99',
          mask: '30',
          gateway: '192.168.100.1',
          interface: 'lo',
        },
        {
          uuid: '23e3b9fd-c6e9-46d9-b9dd-2cf7b8127103',
          address: '172.17.0.10',
          mask: '16',
          gateway: '172.17.0.1',
          interface: 'wlan0',
        },
        {
          uuid: '90adf7ab-1c8d-4cd0-bbe4-2c21f1421110',
          address: '10.30.40.60',
          mask: '8',
          gateway: '10.30.40.1',
          interface: 'eth0',
        },
        {
          uuid: '16c7d8e9-f0a1-4d2e-8233-1e2f3a4b1818',
          address: '198.51.100.67',
          mask: '24',
          gateway: '198.51.100.1',
          interface: 'wlan0',
        },
        {
          uuid: 'cf03c8d9-e0f1-5859-8dee-192a3b4c2323',
          address: '192.168.103.35',
          mask: '30',
          gateway: '192.168.103.1',
          interface: 'lo',
        },
        {
          uuid: 'f5bd9ef1-0a12-4ddf-8f80-33c2adbe2929',
          address: '192.0.2.105',
          mask: '30',
          gateway: '192.0.2.1',
          interface: 'eth2',
        },
        {
          uuid: '7cf0d3e4-f5a6-5354-8899-142a3b4c1e1e',
          address: '192.0.2.101',
          mask: '30',
          gateway: '192.0.2.1',
          interface: 'eth2',
        },
        {
          uuid: 'd2ae3b0d-405e-4e25-a7fa-34bc0eef2a2a',
          address: '172.23.45.70',
          mask: '16',
          gateway: '172.23.0.1',
          interface: 'eth1',
        },
      ];

      const start = (params.page - 1) * params.pageSize;
      const paginated = routes.slice(start, start + params.pageSize);
      const routesResponse: RoutesResponse = {
        routes: paginated,
        totalCounts: routes.length,
        page: params.page,
        pageSize: params.pageSize,
      };
      this._routesResponse$.next(routesResponse);
    }, 300);
  }

  addRoute(route: Omit<Route, 'uuid'>) {
    const current = this._routesResponse$.getValue();
    if (!current) {
      return;
    }

    const newRoute: Route = { ...route, uuid: uuidv4() };

    // кладём спереди, чтобы сразу появилось первой строкой
    const updatedRoutes = [newRoute, ...current.routes];

    // если переполнили текущую страницу — убираем «хвост»
    if (updatedRoutes.length > current.pageSize) {
      updatedRoutes.pop();
    }

    this._routesResponse$.next({
      ...current,
      routes: updatedRoutes,
      totalCounts: current.totalCounts + 1,
    });
  }

  deleteRoute(uuid: string) {
    const routesResponseCurrentState = this._routesResponse$.getValue();
    if (!routesResponseCurrentState) {
      return;
    }

    const routesAfterDeleting = routesResponseCurrentState.routes.filter(
      (existingRoute) => existingRoute.uuid !== uuid,
    );

    this._routesResponse$.next({
      ...routesResponseCurrentState,
      routes: routesAfterDeleting,
      totalCounts: Math.max(routesResponseCurrentState.totalCounts - 1, 0),
    });
  }

  updateRoute(updatedRoute: Route) {
    const routesResponseCurrentState = this._routesResponse$.getValue();

    if (!routesResponseCurrentState) {
      return;
    }

    const updatedRoutes = routesResponseCurrentState.routes.map((existingRoute) =>
      existingRoute.uuid === updatedRoute.uuid ? updatedRoute : existingRoute,
    );

    this._routesResponse$.next({ ...routesResponseCurrentState, routes: updatedRoutes });
  }

  constructor() {}
}
