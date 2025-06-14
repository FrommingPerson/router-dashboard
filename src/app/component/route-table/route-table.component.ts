import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '../../models/Route';

@Component({
  selector: 'app-route-table',
  templateUrl: './route-table.component.html',
  styleUrl: './route-table.component.css'
})
export class RouteTableComponent {
  @Input({required: true}) routes!: Route[];
  @Output() addRoute = new EventEmitter<void>();

  isClicked = false;

  protected add() {
    this.addRoute.emit();
  }

  protected setToClipBoard(str: string) {
    this.isClicked = true;
    window.navigator.clipboard.writeText(str);
    setTimeout(() => this.isClicked = false, 800);
  }
}
