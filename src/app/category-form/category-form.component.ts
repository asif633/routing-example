import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInDownAnimation } from '../shared/animations';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  animations: [ slideInDownAnimation ]
})
export class CategoryFormComponent implements OnInit {
  
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(private prodServ: CategoryService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.data
      .subscribe((data: { category: Category }) => {
        this.category = data.category;
        console.log("cat "+ data.category +this.category);
      });
    let add = this.actRoute.snapshot.queryParams['add'];
    if(add == 'true'){
      this.addCategory = true;
    }
    else if(add = 'false'){
      this.addCategory = false;
    }
  }

  category: Category;
  addCategory: boolean;

  msg: string;
  msg1: string;

  updateCategory() {
    this.prodServ.updateCategory(this.category).then(resolve => this.router.navigate(['../'], {relativeTo: this.actRoute }));
  }

  deleteCategory() {
    this.prodServ.deleteCategory(this.category).then(resolve => this.router.navigate(['../'], {relativeTo: this.actRoute }));
  }

  addNew() {
    this.prodServ.addCategory(this.category).then(resolve => this.router.navigate(['../'], {relativeTo: this.actRoute }));
  }

  cancel(){
    this.router.navigate(['../'], {relativeTo: this.actRoute });
  }
}
