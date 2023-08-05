import { Component } from '@angular/core';
import {exampleProducts} from '@prueba/products';

@Component({
  selector: 'prueba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = exampleProducts;
}
