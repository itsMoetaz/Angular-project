import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../service/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../model/categorie';

@Component({
  selector: 'app-details-categories',
  templateUrl: './details-categories.component.html',
  styleUrls: ['./details-categories.component.css']
})
export class DetailsCategoriesComponent implements OnInit{
constructor(private s:CategoriesService,private ac:ActivatedRoute){

}
categorie= new Categorie();
ngOnInit(){
this.s.getCatgorie(this.ac.snapshot.params['id']).subscribe(
  (d)=>{
this.categorie=d;
  }
)
}
}
