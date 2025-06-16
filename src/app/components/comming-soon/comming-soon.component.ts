import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.css'
})
export class CommingSoonComponent {
  @Input({required: true}) title!: string;
}
