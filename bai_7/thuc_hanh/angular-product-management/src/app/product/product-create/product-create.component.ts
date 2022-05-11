import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
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
