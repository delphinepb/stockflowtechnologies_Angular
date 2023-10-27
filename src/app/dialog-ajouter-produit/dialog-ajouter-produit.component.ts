import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../authentification';
import {getProduits} from '../GetProduits';
import {Router} from "@angular/router";
import {ManagerPageComponent} from "../manager-page/manager-page.component";


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
                      this.categorie=element;
                      this.categories.push(this.categorie);
                  }


              },
              (error) => {
                  console.log('erreur ');
                  // Gérer les erreurs (échec de l'authentification)

              }
          );
  }

  ajouterProduit() {
    const produit = {
      nom: this.nomDuProduit,
      quantite: this.quantite,
      categorie: this.categorie
    };

    this.AuthService.ajoutProd(this.nomDuProduit,this.quantite, this.categorie).subscribe(
      (response: any) => {
        location.reload()
        this.ManagerPageComponent.getP()
        this.dialogRef.close(response);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    );
  }
}
