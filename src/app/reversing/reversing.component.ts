import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ReversingService } from '../reversing.service';

@Component({
  selector: 'app-reversing',
  templateUrl: './reversing.component.html',
  styleUrls: ['./reversing.component.scss']
})
export class ReversingComponent implements OnChanges {

  @Input() firstName: string = null;
  public reversedFirstName: string = null;

  constructor(private rev: ReversingService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'firstName': {
            this.reversedFirstName = this.rev.reverse(changes['firstName'].currentValue);
          }
        }
      }
    }
  }

}
