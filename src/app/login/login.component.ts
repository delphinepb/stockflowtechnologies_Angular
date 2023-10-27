import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification';
import {NgForm} from "@angular/forms";
import {ManagerPageComponent} from "../manager-page/manager-page.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  email: string = '';
  password: string = '';
  element:any;
  elements: any[] = []

  constructor(private authService: AuthService,private router:Router,private ManagerPageComponent:ManagerPageComponent) { }



  login(form: NgForm) {



    if (form.valid) {
      const credentials = {
        email: this.email,
        password: this.password
      }


      this.authService.authenticate(this.email, this.password)
        .subscribe(

          (response) => {
            console.log('Authentification réussie');
            this.authService.VerifyRole(this.email)
              .subscribe(

                (response) => {
                  const objetEnJSON = JSON.stringify(response);
                  const values = Object.values(response);

                  for (const element of values) {
                    this.element=element;
                    this.elements.push(this.element);
                  }
                  if(this.elements[3]=='1'){
                    this.router.navigate(['/manager'])
                  }else if(this.elements[3]=='2'){
                    this.router.navigate(['/caissier'])
                  }

                },
                (error) => {
                  console.error('erreur recup role');
                }
              );


          },
          (error) => {
            // Gérer les erreurs (échec de l'authentification)
            console.error('Échec de l\'authentification'+this.email +" password "+this.password);
          }
        );
    }

  }
}
