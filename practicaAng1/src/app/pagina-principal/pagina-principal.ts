import { Component } from '@angular/core';
import { Login } from "../login/login";
import { MortyApi } from '../morty-api';

@Component({
  selector: 'app-pagina-principal',
  imports: [Login],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css'
})
export class PaginaPrincipal {
  constructor(private mortyApi: MortyApi) {}
  nombre = 'Monica';
  animal = 'xd';
  cambiarAnimal(){
    if(this.animal == 'gatito'){
      this.animal = 'perrito';
    } else {
      this.animal = 'gatito';
    }
  }
  abarrotesPablito (){
    this.mortyApi.obtenerPersonajes().subscribe((response: any) => {
      console.log(response);
    })
  }

  
}
