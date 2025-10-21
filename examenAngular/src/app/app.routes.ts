import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Pokemones } from './pokemones/pokemones';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'pokemones', component: Pokemones}
];
