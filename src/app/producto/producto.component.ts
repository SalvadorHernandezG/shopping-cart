import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})

export class ProductComponent {
  @Input() producto!: Product;
}
