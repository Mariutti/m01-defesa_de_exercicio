import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  constructor(private http: HttpClient) {}

  getFromApi(param: string): Observable<any> {
    return this.http.get(param);
  }
}
