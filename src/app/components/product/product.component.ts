import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  apiUrl = "https://localhost:44393/api/products/getall"
 
  constructor (private httpClient: HttpClient){}
  products: Product[] = []
 
  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data
    });
  }
}
