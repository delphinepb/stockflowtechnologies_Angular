import { Component, ElementRef, OnInit } from '@angular/core';
import { ProduitMockService } from '../produit/produit.mock.service';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogAjouterProduitComponent } from '../dialog-ajouter-produit/dialog-ajouter-produit.component';
import {getProduits} from '../GetProduits';
import {updateProduit} from "../updateProduit";

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
    elements: any[] = [];
    produit = [];

  constructor(
    private el: ElementRef,
    private produitService: ProduitMockService,
    private router: Router,
    public dialog : MatDialog,
    private getProduit : getProduits,
    private updateProduit:updateProduit
  ) {
    this.produits=[]

  }

  getP(){
      this.elements = [];

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

  ngOnInit(){

    this.getP();


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAjouterProduitComponent, {
      width: '500px', height : '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  enleverProduit(){
    if (this.compteur > 0) {
      this.compteur--;
    }
  }

  update(plus_ou_moins:any,id:any,quantite:any){
    if(plus_ou_moins=="plus"){
        this.compteur++;

        this.router.navigateByUrl(this.router.url)
    }else{
        this.compteur--;

        this.router.navigateByUrl(this.router.url)
    }

    if(quantite>=0) {
        this.updateProduit.authenticate(id, quantite)
            .subscribe(
                (response) => {
                    // Gérer la réponse du backend (authentification réussie)
                    console.log('Update Réussi ! ');
                    this.router.navigateByUrl(this.router.url)
                    this.getP()

                },
                (error) => {


                    console.error('Échec de l\'update');
                }
            );

    }
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
