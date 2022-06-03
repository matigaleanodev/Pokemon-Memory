import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  @Output() onClickEvent = new EventEmitter<number>();
  @Output() onRestartApp = new EventEmitter();


  constructor(    
    public cardsService: CardsService,
    public gameplay: GameplayService
  ) { }

  ngOnInit(): void {
  }

  restart(){
    this.gameplay.restartGame();
  }
}
