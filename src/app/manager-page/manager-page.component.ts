import { Component, ElementRef, OnInit } from '@angular/core';
import { ProduitMockService } from '../produit/produit.mock.service';
import { produit } from '../shared/produit';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogAjouterProduitComponent } from '../dialog-ajouter-produit/dialog-ajouter-produit.component';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent implements OnInit {
  compteur: number = 0;
  produits: produit[];
  

  constructor(
    private el: ElementRef, 
    private produitService: ProduitMockService, 
    private router: Router,
    public dialog : MatDialog
    ) { 
    this.produits = [];
  }

  ngOnInit(){
    this.produits = this.produitService.getProduits();
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

  ajouterProduit(){
    this.compteur++;
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

