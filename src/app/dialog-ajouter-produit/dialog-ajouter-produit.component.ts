import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../authentification';
import { Router } from '@angular/router';
import {ManagerPageComponent} from '../manager-page/manager-page.component'

@Component({
  selector: 'app-dialog-ajouter-produit',
  templateUrl: './dialog-ajouter-produit.component.html',
  styleUrls: ['./dialog-ajouter-produit.component.scss']
})
export class DialogAjouterProduitComponent {
  nomDuProduit: string = '';
  quantite: number = 1;
  categorie: number = 1

  constructor(public dialogRef: MatDialogRef<DialogAjouterProduitComponent>, private AuthService: AuthService,private router : Router,private ManagerPageComponent:ManagerPageComponent) {}

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
        this.ManagerPageComponent.getP()
        location.reload();
        //this.router.navigateByUrl(this.router.url)

        this.dialogRef.close(response);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    );
  }
}
