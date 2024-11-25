import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>("http://localhost:3000/categories")
  }
  getCatgorie(id: any): Observable<Categorie> {
    return this.http.get<Categorie>("http://localhost:3000/categories/" + id)
  }
}
