import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification';
import {NgForm} from "@angular/forms";
import {ManagerPageComponent} from "../manager-page/manager-page.component";
import {SharedService} from "../shared.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router:Router,private ManagerPageComponent:ManagerPageComponent,private sharedService: SharedService) { }



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

            this.router.navigate(['/manager'])
            this.sharedService.email = this.email


          },
          (error) => {
            // Gérer les erreurs (échec de l'authentification)
            console.error('Échec de l\'authentification'+this.email +" password "+this.password);
          }
        );
    }

  }
}
