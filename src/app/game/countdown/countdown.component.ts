import { Component, OnInit } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  template: `<countdown [config]="config"></countdown>`,
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  
  config: CountdownConfig = {
    leftTime: 120,
    formatDate: ({ date }) => `${date / 1000}`,
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.config.leftTime === 0) {
      this.config.leftTime = 120;
    }
  }

}
