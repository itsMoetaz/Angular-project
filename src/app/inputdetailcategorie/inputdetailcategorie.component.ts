import { Component, Input } from '@angular/core';
import { Categorie } from '../model/categorie';

@Component({
  selector: 'app-inputdetailcategorie',
  templateUrl: './inputdetailcategorie.component.html',
  styleUrls: ['./inputdetailcategorie.component.css']
})
export class InputdetailcategorieComponent {
@Input()ca!: Categorie;
}
