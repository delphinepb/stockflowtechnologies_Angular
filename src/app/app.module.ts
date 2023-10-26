import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {ManagerPageComponent} from "./manager-page/manager-page.component";
import {ProduitMockService} from "./produit/produit.mock.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogAjouterProduitComponent } from './dialog-ajouter-produit/dialog-ajouter-produit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerPageComponent,
    DialogAjouterProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgIf,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [ProduitMockService,ManagerPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
