import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  readonly API_URL = "http://localhost:3000/product";

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product:Product):Observable<Product> {

      // let check =false;
      // let j:any;

      // for (let i = 0; i < this.products.length; i++){
      //   if (this.products[i].id === id) {
      //     check = true;
      //     j = i;
      //     break;
      //   }
      return this.httpClient.post(this.API_URL,product)
    }

//     if(check){
//       this.products[j] = product;
//     }else{
//       this.products.push(product)
//     }
//   }

//   findProductById(id:number):any {
//     return this.products.find((product) => product.id == id);
//  }
}
