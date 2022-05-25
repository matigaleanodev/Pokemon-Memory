import { Component, Input, OnInit } from '@angular/core';
import { faClock, faHandPointer, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() matches: number = 0;
  @Input() movements: number = 0;

  faClock = faClock;
  faHandPointer = faHandPointer;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
