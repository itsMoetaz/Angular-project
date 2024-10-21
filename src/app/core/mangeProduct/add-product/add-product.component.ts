import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product=new Product()
  showF(form:any){
    console.log(form)
  }
}
