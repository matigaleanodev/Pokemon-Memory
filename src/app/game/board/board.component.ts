import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  // Id de pokemones, exp: 1 = Bulbasaur, 2 = Charmander, etc.
  matches: number = 0;
  min: number = 1;
  max: number = 899;
  pokemonLength: number = 0; // cantidad de pokemons
  pokemonList: number[] = []; // lista de pokemones a aparecer
  gameStarted: boolean = false; 
  flippedCard: number = 0;

  
  constructor(
  ) { }

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
  flipCard(id: number){
    if (this.flippedCard === 0) {
      this.flippedCard = id;
    } else if (this.flippedCard != id){
      this.flippedCard = 0;
    }
  }

}
