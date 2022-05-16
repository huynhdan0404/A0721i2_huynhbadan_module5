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
  readonly API_URL_Category = "http://localhost:3000/category"

  constructor(private httpClient:HttpClient) { }

  getAll(x:number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + '?_page=' + x + '&_limit=2');
  }

  saveProduct(product:Product):Observable<Product> {

      return this.httpClient.post(this.API_URL,product)
    }


  findProductById(id:number):Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + id);
 }

 updateProduct(product:Product):Observable<void>{
  return this.httpClient.patch<void>(this.API_URL + '/' + product.id, product);
 }

 deleteProduct(id:number):Observable<void>{
   return this.httpClient.delete<void>(this.API_URL+ '/' + id );

 }

 getAllCategory(): Observable<Product[]> {
  return this.httpClient.get<Product[]>(this.API_URL_Category);
}
}
