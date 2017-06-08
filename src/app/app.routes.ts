import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleLevelComponent } from './single-level/single-level.component';
import { DoubleLevelComponent } from './double-level/double-level.component';
import { DoubleLevelChild1Component } from './double-level-child1/double-level-child1.component';
import { DoubleLevelChild2Component } from './double-level-child2/double-level-child2.component';
import { DoubleLevelChild3Component } from './double-level-child3/double-level-child3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { QueryParamsChildComponent } from './query-params-child/query-params-child.component';
import { QueryParamsGrandChildComponent } from './query-params-grand-child/query-params-grand-child.component';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { AuthGuard } from './shared/authguard.service';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: 'single', component: SingleLevelComponent, data: { title: 'Single Level Routing' }},
        {path: 'double', component: DoubleLevelComponent, data: { title: 'Double Level'}, children: [
            {path: 'double-child1', component: DoubleLevelChild1Component, data:{ title: 'Double Child 1'}},
            {path: 'double-child2', component: DoubleLevelChild2Component, data:{ title: 'Double Child 2'}},
            {path: 'double-child3', component: DoubleLevelChild3Component, data: {title: 'Double Child 3'}},
        ]},
        {path: 'paramPass', component: RouteParamsComponent, data: {title: 'Route Params'}, children: [
            {path: 'double-child1/:someId', component: DoubleLevelChild1Component},
            {path: 'double-child2', component: DoubleLevelChild2Component},
            {path: 'double-child3/:id', component: DoubleLevelChild3Component, data: {title: 'Double Child 3'}},
        ]},
        {path: 'queryParamPass', component: QueryParamsComponent, children: [
            {path: 'child', children: [
                {path: '', component: QueryParamsChildComponent},
                {path: 'grandchild', component: QueryParamsGrandChildComponent}
            ]},
        ]},
        {path: 'routeGuard', loadChildren: './route-guard/route-guard.module#RouteGuardModule', canLoad: [AuthGuard]},
        {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
        {path: 'signin', component: SignInComponent}
    ]},
    { path: '', redirectTo: '/single', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutes = RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules});