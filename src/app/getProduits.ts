import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getProduits {
  private baseUrl = 'https://localhost:7170';

  constructor(private http: HttpClient) { }

  authenticate() {
    return this.http.get(`${this.baseUrl}/Produits`);
  }

  categorie(){
    return this.http.get(`${this.baseUrl}/Categories`)
  }

}
