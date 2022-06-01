import { Component, OnInit } from '@angular/core';

import { GameParams } from './interface';
import { CardsService } from './services/cards.service';
import { GameplayService } from './services/gameplay.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  
  pokemonScreen: number = 0;


  constructor(
    public cardsService: CardsService,
    public gameplayService: GameplayService
  ) { }
  
  ngOnInit(): void {
    this.pokemonScreen = this.cardsService.getRandomInt(1, 152);
  }
  // metodo para generar las cartas
  getCards(params: GameParams): boolean{
    this.cardsService.gameParams = params;
    this.gameplayService.matches = params.cards;
    this.cardsService.pokemonLength = params.cards;
    return this.gameplayService.gameStarted = true;
  }
  //metodo para reiniciar el juego
  restartGame(){
    this.gameplayService.restart += 1;
    this.gameplayService.gameEnded = false;
    this.gameplayService.matches = this.gameplayService.cards
    this.gameplayService.movements = 0;
  }
  //metodo para volver a la pantalla de inicio
  restartApp(){
    this.gameplayService.gameStarted = false;
    this.gameplayService.gameEnded = false;
  }  
  //metodo para sumar movimientos
  addMovement(movement: number){
    this.gameplayService.movements += movement;
  }
  //metodo para restar matches
  addMatch(match: number){
    this.gameplayService.matches -= match;
  }
}