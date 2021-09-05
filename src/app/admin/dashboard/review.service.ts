import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment as env } from '../../../environments/environment';
import {Formation } from '../../client/formation-list/formation'

import {Review} from './review'
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url =`${env.dev.serverUrl}/review`;

  constructor(private http: HttpClient) {
  }

  getReview(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.url}`);
  }
    /*getReview_by_formation(
    reviews:Review,
    item:Formation):Review[] {

    }*/
  /*
    addBook(book: Object): Observable<Object> {
      return this.http.post(`${this.url}`, book);
    }

    deleteBook(id: number): Observable<any> {
      return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
    }*/
}
