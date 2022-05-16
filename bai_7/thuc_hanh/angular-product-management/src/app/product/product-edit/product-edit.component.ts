import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categorys:Category[] = [];
  product!: Product;
  productFormEdit!: FormGroup;
  category1: string | undefined;
  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
    
     const id = Number(param.get('id'));
     console.log(id)
     this.productService.findProductById(id).subscribe(
      next=>{
          this.product = next;
          this.category1 = next.category;
          this.productFormEdit.patchValue({
            id:next.id,
            name:next.name,
            price:next.price,
            // category:next.category,
            description: next.description
          })
      },
      () =>{

      }, 
      () =>{
        console.log(this.product)
      });
 
      console.log(this.product)
    });

    this.productFormEdit = new FormGroup({
      id: new FormControl(),
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    });

    this.getAllCategory();
  }


  editForm() {
    this.product = this.productFormEdit.value;
    this.productService.updateProduct(this.product).subscribe(
      ()=>{

      },
      ()=>{
        
      },
      ()=>{
     
        this.router.navigateByUrl("/product/list")
      },
    );
   
  }

  getAllCategory(){
    this.productService.getAllCategory().subscribe(
      next => {
        this.categorys = next;
      }
    )
  }
  
}
