import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  AddUrl(data: any) {
    return this.http.post(`${environment.baseUrl}/url/save`, data);
  }
  getAll() {
    return this.http.get(`${environment.baseUrl}/url/getAll`);
  }
}
