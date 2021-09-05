import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Formation } from '../../client/formation-list/formation'

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent {

  submitted
  subject = ['info','math','arbi']

model:Formation={'id':5,'name':'ali','description':'bara aman'}
  onSubmit() { this.submitted = true; }


}
