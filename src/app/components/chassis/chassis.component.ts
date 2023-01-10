import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chassis',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.scss']
})
export class ChassisComponent implements OnInit {
  @Input() chassis: si.Systeminformation.ChassisData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('ChassisComponent -> ngOnInit()');
  }

}
