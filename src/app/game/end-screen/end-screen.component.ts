import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  @Input() movements: number = 0;
  @Input() matches: number = 0;
  @Input() time: number = 0;
  @Input() restart: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
