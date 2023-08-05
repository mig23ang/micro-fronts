import { Component, Input } from '@angular/core';

@Component({
  selector: 'prueba-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title = '';
}
