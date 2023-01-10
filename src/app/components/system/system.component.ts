import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  @Input() system: si.Systeminformation.SystemData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('SystemComponent -> ngOnInit()');
  }

}
