import { Component, OnInit } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  

  flippedCards: number[] = [];

  
  constructor(
    public cardsService: CardsService,
    public gameplay: GameplayService
  ) { }
  
  ngOnInit(): void {
    this.gameplay.getGeneration(this.cardsService.gameParams.generation);
    this.gameplay.getCards(this.cardsService.pokemonLength);
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
            this.gameplay.addMovement(1);
          } else {
            this.cardsService.cardInfo[this.flippedCards[0]].state = 'default';
            this.cardsService.cardInfo[index].state = 'default';
            this.flippedCards = [];
            this.gameplay.addMovement(1);
          }
          this.gameplay.addMatch(matches);
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
