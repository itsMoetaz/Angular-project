import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  tv=[
    {'id':2,'name':'mobile1','like':0},
    {'id':3,'name':'mobile3','like':0},
  
  
  ]

  afterreciveData(e:any){
    //console.log(e);
    let index=this.tv.indexOf(e);
    this.tv[index].like++
  }
}
