import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7170';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    const credentials = { email, password };
    return this.http.post(`${this.baseUrl}/userLogin`, credentials);
  }
}
