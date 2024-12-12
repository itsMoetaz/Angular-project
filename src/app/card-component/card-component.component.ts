import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
  selector: 'app-card',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponent {
  @Input() id!:number;
  @Input() title:string="";
  @Input() image:string="";
  @Input() description:string="";
  @Input() btnText:string="";
  @Input() available:boolean=false;
  getDescription(description:string){
    alert (description);
  }
  @Output() shortedList = new EventEmitter<any>(); 
  addToShortList(){
     this.shortedList.emit({"idElement":this.id,"idUser":5})
 }

}
 