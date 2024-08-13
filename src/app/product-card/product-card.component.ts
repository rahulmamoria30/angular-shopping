// src/app/components/product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() products: any[] = [];
}
