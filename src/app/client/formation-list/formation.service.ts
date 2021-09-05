import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment as env } from '../../../environments/environment';
import {Formation} from './formation'
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url =`${env.dev.serverUrl}/formation`;

  constructor(private http: HttpClient) {
  }

  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.url}`);
  }

  addFormation(formation:Object): Observable<Object> {
    return this.http.post(`${this.url}`, formation);
  }
/*
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }*/

}
