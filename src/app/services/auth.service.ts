import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService implements CanActivate{
    constructor(private router:Router)
    {

    }
    canActivate()
    {
        if(!localStorage.getItem('soccermanager.token'))
        {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}