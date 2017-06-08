import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs/Rx';
import { Product } from '../shared/product.model';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  constructor(private prodServ: ProductService, private route: ActivatedRoute) { }
  
  products: Observable<Product[]>;

  ngOnInit() {
    // this.route.data
    //   .subscribe((data: { products: Observable<Product[]> }) => {
    //     data.products.subscribe(da => console.log('data '+ da.length));
    //     this.products = data.products;
    //   });
    //this.products = this.route.data.pluck('products');
    this.products = this.prodServ.getProducts();
  }

}