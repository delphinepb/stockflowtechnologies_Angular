import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ajouter-produit',
  templateUrl: './dialog-ajouter-produit.component.html',
  styleUrls: ['./dialog-ajouter-produit.component.scss']
})
export class DialogAjouterProduitComponent {

  constructor (public dialogRef : MatDialogRef<DialogAjouterProduitComponent>
    ){}

    close(){
      this.dialogRef.close();
    }
}
