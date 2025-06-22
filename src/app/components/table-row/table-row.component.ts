import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '../../models/Route';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {
  @Input() isEditing = false;
  @Input({required: true}) route!: Route;
  @Output() onDelete = new EventEmitter<void>();
  @Output() onEdited = new EventEmitter<Route>();


  save() {
    this.onEdited.emit(this.route);
    this.isEditing = false;
  }

  edit() {
    this.isEditing = true;
  }
}
