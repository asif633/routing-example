import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs/Rx';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  constructor(private prodServ: ProductService) { }
  
  products: Observable<Product[]>;

  ngOnInit() {
    this.products = this.prodServ.getProducts();
  }

}