import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import {Review} from './review';
import {ReviewService} from './review.service';
import { CommonModule } from "@angular/common";
import { AuthService } from '@auth0/auth0-angular';
import {Formation } from '../../client/formation-list/formation'
import {FormationService} from '../../client/formation-list/formation.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    review: Review[]
    formation:Formation[]
    select:Formation
    constructor(private http: HttpClient,
      public auth: AuthService,
    private service: ReviewService,
    private formService: FormationService) {}
  onChange(item:Formation) {
    this.select = item;
    }
    ngOnInit(): void {

   this.service.getReview().subscribe((data:Review[]) =>{
    this.review=data

  })
   this.formService.getFormation().subscribe((data:Formation[]) =>{
    this.formation=data

  })


  }

}
