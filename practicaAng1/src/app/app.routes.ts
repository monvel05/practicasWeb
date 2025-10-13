import { Routes } from '@angular/router';
import { PaginaPrincipal } from './pagina-principal/pagina-principal';
import { Login } from './login/login';

export const routes: Routes = [
    {path: 'pagina-principal', component: PaginaPrincipal},
    {path: 'login', component: Login}
];
