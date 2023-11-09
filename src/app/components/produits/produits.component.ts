import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  lesProduits: Produit[] = [];
  constructor(private produitService:ProduitService){}
  ngOnInit(): void {
    this.produitService.getProduits().subscribe(
      data=>{
        this.lesProduits = data;
      }
    )
  }
  onAjouter(){
    let p:Produit = new Produit(7,"trousse",10);
    this.produitService.addProduit(p).subscribe(
      data => console.log(data)
    )
  }
  
}
