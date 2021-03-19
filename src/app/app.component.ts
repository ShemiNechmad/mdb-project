import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private main: MainService) { }

  public formGroup: FormGroup;      // For form
  public loading: boolean = false;  // For disabling button
  public firstName: string = null;  // For the new component

  ngOnInit() {
    // Defining the form parameters.
    this.formGroup = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
    // Binding firstName from form to the component parameter.
    this.formGroup.get("firstName").valueChanges.subscribe(x => {
      this.firstName = x;
    })
  }

  //Checking form validations.
  get input() {
    return this.formGroup.get('email');
  }
  get input2() {
    return this.formGroup.get('firstName');
  }

  //Sending form to Server.
  send() {
    if (this.formGroup.controls['firstName'].valid && this.formGroup.controls['email'].valid) {
      this.loading = true;  // disabling button while sending to api.
      let form = {
        name: this.formGroup.controls['firstName'].value,
        email: this.formGroup.controls['email'].value
      };
      this.main.send(form).subscribe(data => {
        console.log(data);  //Received from server.
        this.loading = false; // enabling button after api is done.
      });
    }
  }
}
