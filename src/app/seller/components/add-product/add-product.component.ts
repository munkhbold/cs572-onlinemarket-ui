import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router,
        private authService: AuthService, private productService: ProductService) { }

    addForm: FormGroup;

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            imageUrl: ['', Validators.required],
            unitPrice: ['', Validators.required],
            qty: ['', Validators.required]
        });

    }

    onSubmit() {
        this.productService.createProduct(this.addForm.value)
            .subscribe(() => {                
                this.router.navigate(['list-user']);
            });
    }
}
