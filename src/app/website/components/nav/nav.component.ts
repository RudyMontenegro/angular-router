import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service';
import { CategoriesService } from '../../../services/categories.service';

import { User } from '../../../models/user.model';
import { Category } from '../../../models/category.model';

@Component({      
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  category: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categorieService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.getAllCategory();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(user => {
      this.profile = user;
    });
  }

  getAllCategory(){
    this.categorieService.getAll()
    .subscribe(data =>{
      this.category = data; 
    })
  }

}
