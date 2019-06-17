import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'availableNumber', 'buy'];
  dataSource = this.productService.findAll();
  
  
	constructor(
		private productService: ProductService
	) { }
    
	ngOnInit() {
		this.products = this.productService.findAll();
	}


}