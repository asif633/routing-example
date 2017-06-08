import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Rx';
import { ProductService } from './product.service';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class ProductsResolver implements Resolve<any> {
  
  constructor(private ps: ProductService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    console.log("resolver");
    return this.ps.getProducts();
  }
}