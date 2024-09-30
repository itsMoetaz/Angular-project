import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  constructor(){
    console.log('cons')
  }
ngOnInit(){
  console.log('ngonit')
}
filtre="twin2"
}
