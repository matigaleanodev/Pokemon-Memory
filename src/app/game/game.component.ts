import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  min: number = 1;
  max: number = 899;
  pokemonLength: number = 0;
  pokemonList: number[] = [];
  gameStarted: boolean = false;

  

  constructor() { }

  ngOnInit(): void {
    
  }
  // funcion para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // funcion para desordenar el array
  shuffle(array: number[]): number[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  // funcion para obtener la lista de pokemons
  getPokemonList(): void {
    this.pokemonList = [];
    for (let i = 0; i < this.pokemonLength; i++) {
      this.pokemonList.push(this.getRandomInt(this.min, this.max));
    }
    this.pokemonList = this.pokemonList.concat(this.pokemonList);
    this.pokemonList = this.shuffle(this.pokemonList);
  }
  // funcion para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.pokemonLength = pokemonLength;
    this.getPokemonList();
    return this.gameStarted = true;
  }

}
