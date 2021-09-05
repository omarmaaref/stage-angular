
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import {Formation} from './formation';
import {FormationService} from './formation.service';
import { CommonModule } from "@angular/common";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'formation-api',
  templateUrl: './formation-list.component.html',
})
export class FormationListComponent implements OnInit {
  formation: Formation[]


  constructor(private http: HttpClient,
    public auth: AuthService,
  private service: FormationService) {}

  ngOnInit(): void {

 this.service.getFormation().subscribe((data:Formation[]) =>{
  this.formation=data

})}

}
