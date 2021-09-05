// src/app/app.component.ts

import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService) {}

  public key=`${env.auth.audience}/roles`;
  user_role:number =null;

    ngOnInit(): void {

    this.auth.user$.subscribe(
       (profile)=>{
       this.user_role=0
       if (profile[this.key][0]=="admin")
       { this.user_role=1}
       })
}


}
