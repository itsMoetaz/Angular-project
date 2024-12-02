import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent {
constructor(private s: CategoriesService
  ,private ac:ActivatedRoute,
private router:Router) { }
ngOnInit(){
  this.s.removeCategorie(this.ac.snapshot.params["id"]).subscribe(
    ()=>{
      this.router.navigate(["products"])
    }
  )
}
}
