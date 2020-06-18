import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { first } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../../../model/product.model'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: []
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService,
    private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
      unitPrice: ['', Validators.required],
      qty: ['', Validators.required]
    });

    
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['id']).subscribe(
        data => {          
          this.editForm.setValue(data.result);
        });
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == 200) {
            alert('Product updated successfully.');
            this.router.navigate(['seller/list-product']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }


}
