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
    public gameplay: GameplayService
  ) { }
  
  ngOnInit(): void {
    this.pokemonScreen = this.cardsService.getRandomInt(1, 152);
  }
  // metodo para generar las cartas
  getCards(params: GameParams): boolean{
    this.cardsService.gameParams = params;
    this.gameplay.matches = params.cards;
    this.cardsService.pokemonLength = params.cards;
    return this.gameplay.gameStarted = true;
  }
  //metodo para reiniciar el juego
  restartGame(){
    this.gameplay.gameEnded = false;
    this.gameplay.matches = this.gameplay.cards
    this.gameplay.movements = 0;
  }
  
}