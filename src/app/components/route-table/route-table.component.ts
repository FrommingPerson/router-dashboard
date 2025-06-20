import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '../../models/Route';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-route-table',
  templateUrl: './route-table.component.html',
  styleUrl: './route-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTableComponent {
  @Input({ required: true }) routes!: Route[];

  protected sortParamsSubject: {
    direction: 'ascending' | 'descending' | 'default';
    column: 'gateway' | 'address' | 'interface' | null;
  } = ({ direction: 'default', column: null });

  get sortedRoutes(): Route[] {
    if (!this.sortParamsSubject.column) {
      return this.routes;
    }

    const sortedRoutes = [...this.routes];
    const column = this.sortParamsSubject.column;
    const direction = this.sortParamsSubject.direction;

    sortedRoutes.sort((a, b) => {
      let result = 0;

      if (column === 'address' || column === 'gateway') {
        result = this.compareIPv4(a[column], b[column]);
      } else if (column === 'interface') {
        const valueA = String(a[column]).toLowerCase();
        const valueB = String(b[column]).toLowerCase();
        result = valueA.localeCompare(valueB);
      }

      return direction === 'ascending' ? result : -result;
    });

    return sortedRoutes;
  }

  private compareIPv4(ipA: string, ipB: string): number {
    const octetsA = ipA.split('.').map((octet) => parseInt(octet, 10));
    const octetsB = ipB.split('.').map((octet) => parseInt(octet, 10));

    for (let i = 0; i < 4; i++) {
      if (octetsA[i] !== octetsB[i]) {
        return octetsA[i] - octetsB[i];
      }
    }

    return 0;
  }

  protected sortBy(column: 'gateway' | 'address' | 'interface') {
    if (this.sortParamsSubject.column !== column) {
      this.sortParamsSubject.column = column;
      this.sortParamsSubject.direction = 'ascending';
      return;
    }

    switch (this.sortParamsSubject.direction) {
      case 'ascending':
        this.sortParamsSubject.direction = 'descending';
        break;
      case 'descending':
        this.sortParamsSubject.direction = 'default';
        break;
      case 'default':
        this.sortParamsSubject.direction = 'ascending';
        break;
    }
  }

  protected add() {

  }
}
