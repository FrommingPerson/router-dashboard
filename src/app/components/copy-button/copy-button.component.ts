import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css'],
})
export class CopyButtonComponent {
  @Input() copiedText!: string;

  isChecked = false;

  protected setToClipBoard() {
    this.isChecked = true;
    window.navigator.clipboard.writeText(this.copiedText);
    setTimeout(() => {
      this.isChecked = false;
      this.cdr.detectChanges()
      console.log(this.isChecked);
    }, 1200);
  }

  constructor(private readonly cdr: ChangeDetectorRef) {

  }
}
