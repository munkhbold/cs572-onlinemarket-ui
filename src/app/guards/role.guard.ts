import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(public auth: AuthService, protected router: Router) { }

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        if (['seller', 'admin'].indexOf(this.auth.currentUser.role) === -1 ){
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}


@Injectable()
export class LoginGuard implements CanActivate {
    constructor(public auth: AuthService, protected router: Router) { }

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
