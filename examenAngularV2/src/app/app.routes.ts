import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Main } from './main/main';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'main', component: Main}
];
