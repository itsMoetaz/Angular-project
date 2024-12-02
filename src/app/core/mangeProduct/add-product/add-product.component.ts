import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Product } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product=new Product()
  p= new Categorie();
  constructor(private s: CategoriesService, private router: Router){
  }
  addCategorie(f:NgForm){
    this.s.addCategories(f.value).subscribe(
      () => {
        alert('add c')
      this.router.navigate(['products'])
    },
    (error)=>{
      console.log(error)
      if(error.status==0){
alert('server down')
      }
    },
    ()=>{
      alert('add p')
    }
   
  )
  }
  showF(form:any){
    console.log(form)
  }
}
