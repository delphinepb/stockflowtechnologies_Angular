import { Component,ElementRef  } from '@angular/core';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogAjouterProduitComponent } from '../dialog-ajouter-produit/dialog-ajouter-produit.component';
import {getProduits} from '../GetProduits';
import {updateProduit} from "../updateProduit";


@Component({
  selector: 'app-caissier-page',
  templateUrl: './caissier-page.component.html',
  styleUrls: ['./caissier-page.component.scss']
})
export class CaissierPageComponent {

  compteur: number = 0;
  produits: produit[];  
  selectedproduits: any;
  element:any;
  elements: any[] = []
  categories: any[] = []
  categorie: number = 1
  filteredElements: produit[] = [];

  constructor(
    private el: ElementRef,
    private router: Router,
    public dialog : MatDialog,
    private getProduit : getProduits,
    private updateProduit:updateProduit,
  ) {
    this.produits=[]
    this.getCategories();
    this.getP();
  }

  filtrerParCategorie() {
    this.filteredElements = this.elements.filter(produit => produit.categorie == this.categorie)
  } 

  getCategories(){
    this.categories = [];

      this.getProduit.categorie()
          .subscribe(

              (response) => {
                  const objetEnJSON = JSON.stringify(response);
                  const values = Object.values(response);

                  for (const element of values) {
                      this.categorie=element;
                      this.categories.push(this.categorie);
                  }

              },
              (error) => {
                  console.log('erreur ');

              }
          );
  }

  getP(){
      this.elements = [];


      this.getProduit.authenticate()
          .subscribe(

              (response) => {
                  const objetEnJSON = JSON.stringify(response);
                  const values = Object.values(response);

                  for (const element of values) {
                      this.element=element;
                      this.elements.push(this.element);
                  }
              },
              (error) => {
                  console.log('erreur ');

              }
          );

  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAjouterProduitComponent, {
      width: '500px', height : '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigateByUrl(this.router.url)


    });
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

  supprimerProduit(id:any) {


      this.updateProduit.delete(id)
          .subscribe(
              (response) => {
                  console.log('Delete Réussi ! ');
                  this.router.navigateByUrl(this.router.url)
                  this.getP()

              },
              (error) => {


                  console.error('Échec du delete');
              }
          );

  }

  sedeconnecter(){
    this.router.navigate(['/']);
  }

}

