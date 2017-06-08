import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './app.routes';
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
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './shared/authguard.service';
import { LoginService } from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingleLevelComponent,
    DoubleLevelComponent,
    DoubleLevelChild1Component,
    DoubleLevelChild2Component,
    DoubleLevelChild3Component,
    PageNotFoundComponent,
    RouteParamsComponent,
    QueryParamsComponent,
    QueryParamsChildComponent,
    QueryParamsGrandChildComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    BrowserAnimationsModule,
  ],
  providers: [ AuthGuard, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
