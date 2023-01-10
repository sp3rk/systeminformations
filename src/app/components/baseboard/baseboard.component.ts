import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseboard',
  templateUrl: './baseboard.component.html',
  styleUrls: ['./baseboard.component.scss']
})
export class BaseboardComponent implements OnInit {
  @Input() baseboard: si.Systeminformation.BaseboardData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('BaseboardComponent -> ngOnInit()');
  }

}
