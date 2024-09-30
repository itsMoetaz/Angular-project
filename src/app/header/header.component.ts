import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Q=1;
  kolor='pink'
condition=true;
  users:User[]=[
    {name:'John',quantity:25, price:200},
    {name:'P2',quantity:0, price:200},
    {name:'P3',quantity:25, price:200},

  ]
sayHello(){
  console.log('hello')
}

getColor(){
  if(this.Q>10)
    return 'green'
  else return 'yellow'
}

changeColor(){
  this.kolor='blue'
}
}
