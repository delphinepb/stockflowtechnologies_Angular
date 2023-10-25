import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import { AuthService } from './authentification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }



  login(form: NgForm) {

    console.log("dans login");

    if (form.valid) {
      const credentials = {
        email: this.email,
        password: this.password
      }

      this.authService.authenticate(this.email, this.password)
        .subscribe(

          (response) => {
            // Gérer la réponse du backend (authentification réussie)
            console.log('Authentification réussie');
          },
          (error) => {
            // Gérer les erreurs (échec de l'authentification)
            console.error('Échec de l\'authentification');
          }
        );
    }
      console.log("email " + this.email + " password " + this.password);

    }



}
