import { Injectable } from '@angular/core';
import {produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{

    private PRODUITS: produit[] = [];

    constructor(){
        let p1: produit = new produit('Lait',50, 20);
        let p2: produit = new produit('Pain',20, 5.25);
        let p3: produit = new produit('Pizzas, Quiches, Tartes', 12, 30.10 );
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);


    }

    public getProduits(): produit[]{
        return this.PRODUITS;
    }
}