
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    invalidLogin: boolean;


    constructor(
        private router: Router,
        private authService: AuthService) { }


    signIn(credentials) {
        console.log(credentials);
        this.authService.login(credentials)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.result.token);
                    this.router.navigate(['/']);
                },
                err => {
                    this.invalidLogin = true;
                }
            );
    }
}
