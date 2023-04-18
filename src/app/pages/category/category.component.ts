import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../services/products.service';
import {
  Product,
} from '../../models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  categoryId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
       this.categoryId = param.get('id');// id tiene que ser igual al nombre en app-routing
       if(this.categoryId){
        this.productsService.getByCategory(this.categoryId).subscribe
        ( data =>
          {
            this.products = data;
          }
        )
       }
       
      }
    )
  }
}


