import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  productForm!: FormGroup;
  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      // id: new FormControl(),
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    });

    
  }
  
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(
      ()=>{
         
      },
      ()=>{
        
      },
      ()=>{
        this.router.navigateByUrl("/product/list")
      },
    );
  }

}
