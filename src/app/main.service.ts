import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  public send(form: any): Observable<any> {
    return this.http.post('https://api.paperless.tax/setemail', form);
  }
}
