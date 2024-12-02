import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-updatecategories',
  templateUrl: './updatecategories.component.html',
  styleUrls: ['./updatecategories.component.css']
})
export class UpdatecategoriesComponent implements OnChanges{
@Input()p !:Categorie;
@Input()index:any;
@Output() notif=new EventEmitter<any>;
myp:any;
ngOnChanges(changes: SimpleChanges): void {
  console.log
       this.myp={...this.p}
}
constructor(private s:CategoriesService){}

updateCategorie(f:NgForm){
  f.value.id=this.p.id;
  this
  .s
  .updateCategorie(f.value,this.p.id)
  .subscribe(()=>{
    
  this.notif.emit(f.value)
  })
  }
}
