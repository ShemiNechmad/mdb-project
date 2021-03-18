import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  wait() {
    return new Promise( res => setTimeout(res, 2000) );
  }

  async reverseName(firstName: string):Promise<any> {
    await this.wait();
    return firstName.split("").reverse().join("");
  }
}
