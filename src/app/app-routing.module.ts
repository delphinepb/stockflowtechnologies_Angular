import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CaissierPageComponent } from './caissier-page/caissier-page.component';

const routes: Routes = [
  { path:'' , component : LoginComponent},
  { path: 'manager', component: ManagerPageComponent },
  {path : 'caissier', component : CaissierPageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
