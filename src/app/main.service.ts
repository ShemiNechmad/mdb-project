import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  // Sending the form. Normally, addresses should be defined in the environment file and imported from there.
  public send(form: any): Observable<any> {
    return this.http.post('https://api.paperless.tax/setemail', form);
  }
}
