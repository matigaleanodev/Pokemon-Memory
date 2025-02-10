import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-player-profile',
    templateUrl: './player-profile.component.html',
    styleUrls: ['./player-profile.component.scss'],
    standalone: false
})
export class PlayerProfileComponent implements OnInit {

  @Input() player: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
