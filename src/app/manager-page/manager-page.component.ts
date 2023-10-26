import { Component, ElementRef, OnInit } from '@angular/core';
import { ProduitMockService } from '../produit/produit.mock.service';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';
import {updateProduit} from "../updateProduit";

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent implements OnInit {
  compteur: number = 0;
  produits: produit[];

  constructor(private el: ElementRef, private produitService: ProduitMockService, private router: Router,private updateProduit:updateProduit) {
    this.produits = [];
  }

  ngOnInit(){
    this.produits = this.produitService.getProduits();
}

  enleverProduit(id: any,quantite:any){
    console.log("dans enlever produit "+id)

    this.updateProduit.authenticate(id,quantite)
      .subscribe(

        (response) => {
          // Gérer la réponse du backend (authentification réussie)
          console.log('Update Réussi ! ');


        },
        (error) => {


          console.error('Échec de l\'update');
        }
      );
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
