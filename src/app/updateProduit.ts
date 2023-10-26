import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class updateProduit {
  private baseUrl = 'https://localhost:7170';

  constructor(private http: HttpClient) { }

  authenticate(id: any,quantite:any) {
    const credentials = { id, quantite };
    return this.http.post(`${this.baseUrl}/UpdateQuantite`, credentials);
  }
}
