import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '../../models/Route';

@Component({
  selector: 'app-route-table',
  templateUrl: './route-table.component.html',
  styleUrl: './route-table.component.css',
})
export class RouteTableComponent {
  @Input({ required: true }) routes!: Route[];
  @Output() addRoute = new EventEmitter<void>();

  isClicked = false;
  sortDirection = 'asc' || 'desc';
  sortColumn: 'gateway' | 'address' | 'interface' | null = null;

  get sortedRoutes(): Route[] {
    if (!this.sortColumn) {
      return this.routes;
    }
    const sortedRoutes = [...this.routes];
    const column = this.sortColumn;
    const direction = this.sortDirection;

    sortedRoutes.sort((a, b) => {
      let valueA: string | number = a[column];
      let valueB: string | number = b[column];

      if (column === 'address' || column === 'gateway') {
        valueA = this.ipToNumber(valueA as string);
        valueB = this.ipToNumber(valueB as string);
      } else if (column === 'interface') {
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
      }

      if (valueA! < valueB!) return direction === 'asc' ? -1 : 1;
      if (valueA! > valueB!) return direction === 'asc' ? 1 : -1;
      return 0;
    })

      return sortedRoutes;
  }

  private ipToNumber(ip: string): number {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0);
  }

  protected sortBy(column : 'gateway' | 'address' | 'interface')
    {
      if (this.sortColumn == column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    }

  protected discardSortBy(event: Event)
    {
      event.preventDefault();
      this.sortColumn = null;
    }

  protected add() {
      this.addRoute.emit();
    }

  protected setToClipBoard(str: string) {
      this.isClicked = true;
      window.navigator.clipboard.writeText(str);
      setTimeout(() => this.isClicked = false, 800);
    }
  }
