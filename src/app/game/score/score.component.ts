import { Component, OnInit } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
    standalone: false
})
export class ScoreComponent implements OnInit {

  constructor(
    public cardsService: CardsService,
    public gameplay: GameplayService
  ) {}

  ngOnInit(): void {    
  }
  
  restart(){
    this.gameplay.restartGame();
  }
}