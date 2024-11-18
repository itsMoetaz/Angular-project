import { Component } from '@angular/core';
import { FirstServiceService } from '../service4twin/first-service.service';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component {

  constructor(private s:FirstServiceService){

  }
  ngOnInit(){
    this.s.showMsg().subscribe();
    this.s.sum(3,5).subscribe(
      
    )
  }
traitement(){
  this.s.addElementToTab('C')
}
}
