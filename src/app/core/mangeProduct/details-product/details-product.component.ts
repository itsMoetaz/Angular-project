import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
constructor(private ac:ActivatedRoute){

}
ngOnInit(){
  //console.log(this.ac.snapshot.params['idt'])
  this.ac.params.subscribe(
    (d)=>{
console.log(d)
    }
  )
}
}
