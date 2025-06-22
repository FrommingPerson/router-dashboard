import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.css'
})
export class SaveButtonComponent {
@Output() onSave = new EventEmitter();

protected save() {
  this.onSave.emit();
}
}
