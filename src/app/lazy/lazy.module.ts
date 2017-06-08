import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { CardComponent } from '../card/card.component';
import { appRoutes } from './lazy.routes';
import { ProductService } from '../shared/product.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { HttpModule } from '@angular/http';
import { ProductsResolver } from '../shared/products.resolver';

@NgModule({
  imports: [
    CommonModule,
    appRoutes,
    //AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    HttpModule
  ],
  declarations: [
    CardsContainerComponent,
    CardComponent
  ],
  providers: [ ProductService, ProductsResolver ]
})
export class LazyModule { }
