import { Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path:"",component:AdministradorComponent},
    {path:"login",component:LoginComponent}
];
