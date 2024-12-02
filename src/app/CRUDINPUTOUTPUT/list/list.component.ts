import { Component } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
constructor(private s:CategoriesService) { }
categories:Categorie[]=[];
cp:any;
showUpdate=false;
ngOnInit(){
  this.s.getCategories().subscribe(
    (data)=>{
this.categories=data;
    }
   
  )
}
categoriselected(c:any){
  this.showUpdate=true
this.cp=c
}
}
