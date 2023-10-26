import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router:Router) { }



  login(form: NgForm) {

    console.log("dans login");

    if (form.valid) {
      const credentials = {
        email: this.email,
        password: this.password
      }

      console.log('a '+this.email +" password "+this.password);

      this.authService.authenticate(this.email, this.password)
        .subscribe(

          (response) => {
            // Gérer la réponse du backend (authentification réussie)
            console.log('Authentification réussie');

            this.router.navigate(['/manager'])
          },
          (error) => {
            // Gérer les erreurs (échec de l'authentification)
            console.error('Échec de l\'authentification'+this.email +" password "+this.password);
          }
        );
    }
    console.log("email " + this.email + " password " + this.password);

  }
}
