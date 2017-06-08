import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { ProductsResolver } from '../shared/products.resolver';

const routes: Routes = [
    {path: '', component: CardsContainerComponent}
];

export const appRoutes = RouterModule.forChild(routes);
