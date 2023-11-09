import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../classes/produit';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>
  {
    return this.http.get<Produit[]>(URL);  
  }

  addProduit(p:Produit):Observable<Produit>{
    return this.http.post<Produit>(URL,p);
  }
}
