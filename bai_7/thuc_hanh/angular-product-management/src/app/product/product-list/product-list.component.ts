import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService: ProductService,
   private router:Router,
   private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
     this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  delete(id:any ,name:any){
   
     if(   confirm("bạn chắc chắn muốn xóa " + name + '?')){
      this.productService.deleteProduct(Number(id)).subscribe(
        ()=>{
         
        },
        ()=>{
          
        },
        ()=>{
          this.ngOnInit();
        },
        );
     }
       
    
  }
}
