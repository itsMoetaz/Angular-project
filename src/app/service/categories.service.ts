import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
import { AddComponent } from './../core/user/add/add.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = "http://localhost:3000/categories/"
  constructor(private http: HttpClient) { }
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseUrl)
  }
  getCatgorie(id: any): Observable<Categorie> {
    return this.http.get<Categorie>(this.baseUrl + id)
  }
  addCategories(data: Categorie) {
    return this.http.post(this.baseUrl, data)
  }
  removeCategorie(id: any) {
    return this.http.delete(this.baseUrl + id)
  }
  updateCategorie(data: Categorie,id:any) {
    return this.http.put(this.baseUrl+id, data)
  }
}
