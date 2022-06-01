import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CardInfo, GameParams } from '../interface';
import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  

  flippedCards: number[] = [];
  @Output() matchEvent = new EventEmitter();
  @Output() movementEvent = new EventEmitter();

  
  constructor(
    public cardsService: CardsService,
    public gameplayService: GameplayService
  ) { }
  
  ngOnInit(): void {
    this.gameplayService.getGeneration(this.cardsService.gameParams.generation);
    this.gameplayService.getCards(this.cardsService.pokemonLength);
  }
  // metodo para comparar las cartas
  flipCard(index: number){
    this.cardsService.cardInfo[index].state = 'flipped';
    this.flipAudio();
      setTimeout(() => {
        let matches: number = 0;
        if (this.flippedCards.length === 0) {
          this.flippedCards.push(index);
        } else if (this.flippedCards.length === 1 && this.cardsService.cardInfo[this.flippedCards[0]].id === this.cardsService.cardInfo[index].id){
            this.cardsService.cardInfo[index].state = 'matched';
            this.matchAudio();
            matches += 1;
            this.cardsService.cardInfo[this.flippedCards[0]].state = 'matched';
            this.flippedCards = [];
            this.movementEvent.emit(1);
          } else {
            this.cardsService.cardInfo[this.flippedCards[0]].state = 'default';
            this.cardsService.cardInfo[index].state = 'default';
            this.flippedCards = [];
            this.movementEvent.emit(1);
          }
          this.matchEvent.emit(matches);
      } , 600);
  }
  flipAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/card-flip.wav";
    audio.load();
    audio.play();
  }
  matchAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/match.wav";
    audio.load();
    audio.play();
  }

  

}
