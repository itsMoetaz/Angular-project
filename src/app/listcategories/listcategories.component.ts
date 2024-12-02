import { Component } from '@angular/core';
import { Categorie } from '../model/categorie';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  constructor(private s:CategoriesService){

  }
  ca !:Categorie;
  showInput=false;
  categories:Categorie[]=[];
    m(c:any){
      this.j=c;
      this.show=true
console.log(c)
//this.categories.indexOf(c);
//alert(c.description)
    }

    show=false;
    j=-1;
k=-1;
des="";
State=false;
search="";
    changeState(indexOfElement:any){
      /*if(this.State)
this.State=false;
      else
      this.State=true;*/
    this.State=!this.State
this.des=this.categories[indexOfElement].description;
this.k=indexOfElement;
    }
    getProduct(i:any){ 
      this.showInput=true;
      this.ca=this.categories[i];

    }
    ngOnInit(){
      this.s.getCategories().subscribe(
        (data)=>{
this.categories=data;
        },
        (error)=>{
          console.log(",nvkfgnfd error",error.status)
        }
      )
    }
    remove(id:any){
      this.s.removeCategorie(id).subscribe(
        ()=>{
          alert('removed')
        }
      )
    }
}
