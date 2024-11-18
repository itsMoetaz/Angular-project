import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }
  tab=["a","b"];
  addElementToTab(e:string){
    this.tab.push(e);
  }
  showTab(){
    return this.tab
  }
  showMsg(){
    return new Observable(
      ()=>{
        console.log("hello");
      }
    )
  }
  sum(a:number,b:number){
return new Observable(
  ()=>{
    
a+b
  }
)
  }
}
