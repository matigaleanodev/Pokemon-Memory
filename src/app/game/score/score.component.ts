import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { map, interval, takeWhile } from 'rxjs';
import { faClock, faHandPointer, faStar } from '@fortawesome/free-solid-svg-icons';


import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() time: number = 60;
  @Output() onClickEvent = new EventEmitter<number>();
  faClock = faClock;
  faHandPointer = faHandPointer;
  faStar = faStar;
  countdown: number = 60


  constructor(
    public cardsService: CardsService,
    public gameplayService: GameplayService
  ) { }

  ngOnInit(): void {
    this.countdown = this.time;
    this.getCountdown().subscribe(
      (countdown) => this.countdown = countdown
    );
  }
  ngOnChanges() {    
    if (this.gameplayService.restart != 0) {
      this.countdown = this.cardsService.gameParams.time;
    }
    if (this.gameplayService.matches === 0 || this.countdown == 0) {
      this.gameplayService.gameEnded = true;
    }
  }
  restart(){
    this.countdown = this.time;
    this.gameplayService.restartGame();
  }
  getCountdown() {
    return interval(1000).pipe(
      takeWhile(() => this.countdown > 0),
      map(() => --this.countdown)
    );
  }

}
