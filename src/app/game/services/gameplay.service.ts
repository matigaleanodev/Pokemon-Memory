import { Injectable } from '@angular/core';

import { CardsService } from '../services/cards.service';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  cards: any = [{value:8, name:'4x4'}, {value:10, name:'4x5'}, {value:12, name:'4x6'}];
  times: any = [30, 45, 60];
  generations: any = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'all'];

  gameStarted: boolean = false;
  gameEnded: boolean = false;
  movements: number = 0;
  matches: number = 12;


  constructor(
    public cardsService: CardsService
  ) { }

  // metodo para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.cardsService.cardInfo = [];
    this.cardsService.pokemonLength = pokemonLength;
    this.cardsService.getCardArray();
    return this.gameStarted = true;
  }
  // metodo para obtener generacion de pokemon
  getGeneration(generation: string){
    switch (generation) {
      case 'all':
        return this.cardsService.min = 1, this.cardsService.max = 899;
      case 'first':
        return this.cardsService.min = 1, this.cardsService.max = 152;
      case 'second':
        return this.cardsService.min = 152, this.cardsService.max = 252;
      case 'third':
        return this.cardsService.min = 252, this.cardsService.max = 387;
      case 'fourth':
        return this.cardsService.min = 387, this.cardsService.max = 494;
      case 'fifth':
        return this.cardsService.min = 494, this.cardsService.max = 650;
      case 'sixth':
        return this.cardsService.min = 650, this.cardsService.max = 722;
      case 'seventh':
        return this.cardsService.min = 722, this.cardsService.max = 810;
      case 'eighth':
        return this.cardsService.min = 809, this.cardsService.max = 899;
      default:
        return this.cardsService.min = 1, this.cardsService.max = 899;
    }
  }
  // metodo para reiniciar el juego
  restartGame(){
    this.cardsService.cardInfo = [];
    this.getCards(this.cardsService.pokemonLength);
    this.gameEnded = false;
    this.matches = this.cardsService.gameParams.cards;
    this.movements = 0;
  }
  restartApp(){
    this.gameEnded = false;
    this.gameStarted = false;
    this.movements = 0;
    this.matches = 12;
  }
  //metodo para sumar movimientos
  addMovement(movement: number){
    this.movements += movement;
  }
  //metodo para restar matches
  addMatch(match: number){
    if (this.matches === 1) {
      this.gameEnded = true;
      this.matches -= match;
    } else {
      this.matches -= match;
    }
  }
  endGame(){
    this.gameEnded = true;
  }
  
}

