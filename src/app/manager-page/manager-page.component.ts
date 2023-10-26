import { Component, ElementRef, OnInit } from '@angular/core';
import { ProduitMockService } from '../produit/produit.mock.service';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent implements OnInit {
  compteur: number = 0;
  produits: produit[];

  constructor(private el: ElementRef, private produitService: ProduitMockService, private router: Router) { 
    this.produits = [];
  }

  ngOnInit(){
    this.produits = this.produitService.getProduits();
}

  enleverProduit(){
    if (this.compteur > 0) {
      this.compteur--;
    }
  }

  ajouterProduit(){
    this.compteur++;
  }

  newProduct(){
  }

  supprimerProduit() {
    const produitElement = this.el.nativeElement.querySelector('.produit');
    if (produitElement) {
      produitElement.remove();
    }
  }

  sedeconnecter(){
    this.router.navigate(['/']);
  }
}
