import { Component, ElementRef, OnInit } from '@angular/core';
import { ProduitMockService } from '../produit/produit.mock.service';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';
import {getProduits} from '../GetProduits';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent implements OnInit {
  compteur: number = 0;
  produits: produit[];
  selectedproduits: any;
  element:any;
  elements: any[] = []


      


  constructor(private el: ElementRef, private produitService: ProduitMockService, private router: Router,private getProduit : getProduits) { 
    this.produits = [];
  }

  ngOnInit(){
   
    this.produits = this.produitService.getProduits();

    this.getProduit.authenticate()
        .subscribe(

          (response) => {
            // Gérer la réponse du backend (authentification réussie)
            const objetEnJSON = JSON.stringify(response);
            const values = Object.values(response);

            for (const element of values) {
              // `element` contient un élément de la liste
              console.log('Élément:', element);
              this.element=element;
              this.elements.push(this.element);
              // Vous pouvez maintenant faire ce que vous voulez avec chaque élément
            }

            console.log(this.element)
       
          },
          (error) => {
            console.log('erreur ');
            // Gérer les erreurs (échec de l'authentification)
        
          }
        );

        
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