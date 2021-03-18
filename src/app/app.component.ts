import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  get input() {
    return this.formGroup.get('email');
  }
  get input2() {
    return this.formGroup.get('firstName');
  }

  send() {

  }
}
