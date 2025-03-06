import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productslist',
  imports: [NgFor, RouterModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css',
  standalone: true
})
export class ProductslistComponent implements OnInit{
  products: any[] = [];

  constructor(private store: ProductsService) { }

  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products =>{
      this.products = products;
      console.log(products);
    });
  }
}
