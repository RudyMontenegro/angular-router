import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ImgComponent } from './components/img/img.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: 
  [
    ImgComponent,    
    ReversePipe,
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ImgComponent,    
    ReversePipe,
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
