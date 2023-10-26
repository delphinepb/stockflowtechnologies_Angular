import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../authentification';
import {getProduits} from '../GetProduits';
import{ManagerPageComponent} from '../manager-page/manager-page.component'
import {Router} from "@angular/router";


@Component({
  selector: 'app-dialog-ajouter-produit',
  templateUrl: './dialog-ajouter-produit.component.html',
  styleUrls: ['./dialog-ajouter-produit.component.scss']
})
export class DialogAjouterProduitComponent {
  nomDuProduit: string = '';
  quantite: number = 1;
  categorie: number = 1
  selectedproduits: any;
  categories: any[] = []

  constructor(private router: Router,public dialogRef: MatDialogRef<DialogAjouterProduitComponent>, private AuthService: AuthService,private getProduit : getProduits,private ManagerPageComponent:ManagerPageComponent) {
    this.getCategories();

  }

  getCategories(){
    this.categories = [];

      this.getProduit.categorie()
          .subscribe(

              (response) => {
                  const objetEnJSON = JSON.stringify(response);
                  const values = Object.values(response);

                  for (const element of values) {

                      console.log('Élément:', element);
                      this.categorie=element;
                      this.categories.push(this.categorie);

                  }

                  console.log(this.categorie)

              },
              (error) => {
                  console.log('erreur ');

              }
          );
  }

  ajouterProduit() {
    const produit = {
      nom: this.nomDuProduit,
      quantite: this.quantite,
      categorie: this.categorie
    };
    console.log(this.nomDuProduit, this.quantite, this.categorie);

    this.AuthService.ajoutProd(this.nomDuProduit,this.quantite, this.categorie).subscribe(
      (response: any) => {
        console.log('Produit ajouté:', response);
        this.dialogRef.close();
        this.router.navigateByUrl(this.router.url)
        this.ManagerPageComponent.getP()
        location.reload()
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    );
  }
}
