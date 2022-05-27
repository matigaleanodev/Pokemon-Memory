import { Component, Input, OnInit } from '@angular/core';
import { map, interval, takeWhile } from 'rxjs';
import { faClock, faHandPointer, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() matches: number = 12;
  @Input() movements: number = 0;
  @Input() restart: number = 0;
  @Input() time: number = 60;

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
  }

  getCountdown() {
    return interval(1000).pipe(
      takeWhile(() => this.countdown > 0),
      map(() => --this.countdown)
    );
  }

}
