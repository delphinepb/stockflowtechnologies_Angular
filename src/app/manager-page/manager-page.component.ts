import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent {
  compteur: number = 0;

  constructor(private el: ElementRef) { }

  

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
}
