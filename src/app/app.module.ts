import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { FormsModule } from '@angular/forms';

import { ManagerPageComponent } from './manager-page/manager-page.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ManagerPageComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
