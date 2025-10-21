import { Component } from '@angular/core';
import { MortyApi } from '../services/morty-api';
import { PokeApi } from '../services/poke-api';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css'
})
export class PaginaPrincipal {
  constructor(private mortyApi: MortyApi, private pokeApi: PokeApi) {}
  nombre = 'Monica';
  animal = 'xd';
  miPersonaje: any = null;
  personajes: any[] = [];
  pikachu: any = null;

  ngOnInit() {
    this.abarrotesPablito();
    this.traerAPikachu();
  }

  takeIndex(index: number) {
    console.log(index);
    console.log(this.personajes[index]);
    this.miPersonaje = this.personajes[index];
  }

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
      this.personajes = response.results;
    })
  }

  traerAPikachu(){
    this.pokeApi.obtenerPikachu().subscribe((response: any) => {
      console.log(response);
      this.pikachu = response;
    })
  }
}
