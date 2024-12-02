import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-updatecategories',
  templateUrl: './updatecategories.component.html',
  styleUrls: ['./updatecategories.component.css']
})
export class UpdatecategoriesComponent {
@Input()p :Categorie=new Categorie();

constructor(private s:CategoriesService){}

updateCategorie(f:NgForm){
  this
  .s
  .updateCategorie(f.value,this.p.id)
  .subscribe(()=>{
  //notification to parent index
  })
  }
}
