import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
p=new Categorie();

constructor(
  private s:CategoriesService
  ,private ac:ActivatedRoute,
private router:Router){}
ngOnInit(){
  this.s.getCatgorie(this.ac.snapshot.params["id"]).subscribe(
    (result)=>{
      this.p=result;
    }
  )
}
updateCategorie(f:NgForm){
this
.s
.updateCategorie(f.value,this.ac.snapshot.params["id"])
.subscribe(()=>{
this.router.navigate(['products'])
})
}
}
