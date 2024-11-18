import { Component } from '@angular/core';
import { FirstServiceService } from '../service4twin/first-service.service';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css'],
  providers:[FirstServiceService]
})
export class M2Component {
  constructor(private s:FirstServiceService) { }
  secondCall(){
    console.log(this.s.showTab())
  }
}
