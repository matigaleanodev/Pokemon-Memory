import { Component, OnInit } from '@angular/core';

import { CardData } from '../interface';

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
  pokemons: CardData[] = [];
  flippedCards: CardData[] = []; // lista de cartas reveladas
  gameStarted: boolean = false; 

  
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

  setupPokemons(): void {
    this.pokemons = [];
    this.pokemonList.forEach((pokemon) => {
      const cardData: CardData = {
        pokemonId: pokemon,
        state: 'default'
      };
      this.pokemons.push(cardData);
    });
  }

  cardClicked(index: number): void {
    const cardInfo = this.pokemons[index];
    
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);
      if (this.flippedCards.length > 1) {
        this.checkForCardMatch()
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
      }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.pokemonId === cardTwo.pokemonId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matches++;

        if (this.matches === this.pokemons.length) {
          alert('You win!');
        }
      }
    }, 1000);
  }

}
