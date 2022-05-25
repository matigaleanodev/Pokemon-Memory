import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() matches: number = 0;
  @Input() movements: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
