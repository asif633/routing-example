import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteGuardComponent } from './route-guard.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { CategoryService } from '../shared/category.service';
import { appRoutes } from './route-guard.routes';
import { CategoryResolver } from '../shared/category.resolver';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../shared/authguard.service';

@NgModule({
  imports: [
    CommonModule,
    appRoutes,
    FormsModule,
  ],
  declarations: [
    RouteGuardComponent,
    CategoryFormComponent,
    CategoryTableComponent
  ],
  providers: [ CategoryService, CategoryResolver ],
})
export class RouteGuardModule { }
