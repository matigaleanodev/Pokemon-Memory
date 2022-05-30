import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { map, interval, takeWhile } from 'rxjs';
import { faClock, faHandPointer, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() matches: number = 12;
  @Input() movements: number = 0;
  @Input() restart: number = 0;
  @Input() time: number = 60;
  @Input() pokemonLength: number = 0;
  @Input() gameStarted: boolean = false;
  @Output() gameEndedEvent = new EventEmitter();
  @Output() onClickEvent = new EventEmitter<number>();

  faClock = faClock;
  faHandPointer = faHandPointer;
  faStar = faStar;
  countdown: number = 60


  constructor() { }

  ngOnInit(): void {
    this.countdown = this.time;
    this.getCountdown().subscribe(
      (countdown) => this.countdown = countdown
    );
  }

  ngOnChanges() {
    if (this.restart != 0) {
      this.countdown = this.time;
    }
    if (this.matches == 0 || this.countdown == 0) {
      this.gameEndedEvent.emit();
    }
  }

  getCountdown() {
    return interval(1000).pipe(
      takeWhile(() => this.countdown > 0),
      map(() => --this.countdown)
    );
  }

  onClick(){
    this.onClickEvent.emit(this.pokemonLength);
  }

}
