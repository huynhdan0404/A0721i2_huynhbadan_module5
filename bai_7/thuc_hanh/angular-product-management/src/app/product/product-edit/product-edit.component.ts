import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id!: any;
  product!: Product;
  productFormEdit!: FormGroup;
  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {}
    // this.activatedRouter.paramMap.subscribe((param) => {
    //  this.id = param.get("id")
    //   this.product = this.productService.findProductById(this.id);
    //   console.log(this.product);
    // });

  //   this.productFormEdit = new FormGroup({
  //     id: new FormControl(this.product.id),
  //     name: new FormControl(this.product.name),
  //     price: new FormControl(this.product.price),
  //     description: new FormControl(this.product.description)
  //   });
  // }


  // editForm() {
  //   const product1 = this.productFormEdit.value;
  //   this.productService.saveProduct(product1,product1.id);
  //   this.router.navigateByUrl('/product/list');
  // }
  
}
