import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private router: Router, 
    private authService: AuthService) { }
    
  register(credentials) {
    this.authService.register(credentials)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err.error.result.errors[0]);
        }
      );
  }

}
