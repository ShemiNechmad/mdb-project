import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReversingService {

  constructor() { }

  reverse(firstName: string) {
    return firstName.split("").reverse().join("");
  }
}
