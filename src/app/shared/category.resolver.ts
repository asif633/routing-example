import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs/Rx';
import { CategoryService } from './category.service';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

    constructor(private ps: CategoryService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Category {
        console.log("resolver");
        let cat: Category;
        let id = route.params['id'];
        if (id == 'new') {
            return this.ps.initializeNew();
        }
        else {
            console.log("cad");
            this.ps.getCategorys().subscribe(cats => {
                cat = cats.filter(cat => cat.$key == route.params['id'])[0];
                console.log("caaa "+ cat.$key);
            }
            );
        }
        return cat;
    }
}