import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../interface';


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
  pokemonScreen: number = 0;
  pokemonLength: number = 0; // cantidad de pokemons
  pokemonList: number[] = []; // lista de pokemones a aparecer
  gameStarted: boolean = false; 
  flippedCards: number[] = [];
  cardInfo: CardInfo[] = [];

  
  constructor(
  ) { }

  ngOnInit(): void {
    this.pokemonScreen = this.getRandomInt(1, 152);
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
  // funcion para generar informacion de las cartas
  getCardInfo(){
    for (let i in this.pokemonList) {
      this.cardInfo.push({
        id: this.pokemonList[i],
        state: 'default'
      });
    }
  }
  // funcion para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.pokemonList = [];
    this.cardInfo = [];
    this.pokemonLength = pokemonLength;
    this.getPokemonList();
    this.getCardInfo();
    return this.gameStarted = true;
  }
  // funcion para comparar las cartas
  flipCard(index: number){
    this.cardInfo[index].state = 'flipped';
    setTimeout(() => {
      if (this.flippedCards.length === 0) {
        this.flippedCards.push(index);
      } else if (this.flippedCards.length === 1 && this.cardInfo[this.flippedCards[0]].id === this.cardInfo[index].id){
          this.cardInfo[index].state = 'matched';
          this.cardInfo[this.flippedCards[0]].state = 'matched';
          this.flippedCards = [];
        } else {
          this.cardInfo[this.flippedCards[0]].state = 'default';
          this.cardInfo[index].state = 'default';
          this.flippedCards = [];
        }
    } , 600);
  }
  

}
