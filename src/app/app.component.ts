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

  public formGroup: FormGroup;
  public reversedString: string = null;
  public loading: boolean = false;

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

  async send() {
    if (this.formGroup.controls['firstName'].valid) {
      this.loading = true;
      this.reversedString = await this.main.reverseName(this.formGroup.controls['firstName'].value);
      this.loading = false;
    }
  }
}
