import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  invalidRegister: boolean;
  invalidMessage: string;
  role = 'buyer';

  constructor(
    private router: Router,
    private authService: AuthService) { }

  register(credentials) {
    this.authService.register(credentials, this.role)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
        },
        err => {
          this.invalidRegister = true;
          this.invalidMessage = err.error.result.errors[0];
        }
      );
  }

  registerAs(isSeller){
    isSeller ? this.role = 'seller' : this.role = 'buyer';
  }
}
