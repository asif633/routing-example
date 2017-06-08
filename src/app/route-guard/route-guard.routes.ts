import { Routes, RouterModule } from '@angular/router';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { RouteGuardComponent } from './route-guard.component';
import { CategoryResolver } from '../shared/category.resolver';
import { AuthGuard } from '../shared/authguard.service';

const routes: Routes = [
    {path: '', component: RouteGuardComponent, canActivate: [AuthGuard], children: [
        {path: 'category', component: CategoryTableComponent, canActivate: [AuthGuard]},
        {path: 'category/:id', component: CategoryFormComponent, resolve: {category: CategoryResolver}}
    ]}
];

export const appRoutes = RouterModule.forChild(routes);