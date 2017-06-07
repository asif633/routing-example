import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from '../cards-container/cards-container.component';

const routes: Routes = [
    {path: '', component: CardsContainerComponent}
];

export const appRoutes = RouterModule.forChild(routes);
