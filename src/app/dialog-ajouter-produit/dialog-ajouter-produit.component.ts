import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../authentification';
import {getProduits} from '../GetProduits';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

}

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

  constructor(public dialogRef: MatDialogRef<DialogAjouterProduitComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private AuthService: AuthService,private getProduit : getProduits) {
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
                      // `element` contient un élément de la liste
                      console.log('Élément:', element);
                      this.categorie=element;
                      this.categories.push(this.categorie);
                      // Vous pouvez maintenant faire ce que vous voulez avec chaque élément
                  }

                  console.log(this.categorie)

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
    console.log(this.nomDuProduit, this.quantite, this.categorie);

    this.AuthService.ajoutProd(this.nomDuProduit,this.quantite, this.categorie).subscribe(
      (response: any) => {
        console.log('Produit ajouté:', response);
        location.reload()
        this.dialogRef.close(response);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    );
  }
}
