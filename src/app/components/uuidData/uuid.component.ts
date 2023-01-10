import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
  styleUrls: ['./uuid.component.scss']
})
export class UuidComponent implements OnInit {
  @Input() uuid: si.Systeminformation.UuidData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('UuidComponent -> ngOnInit()');
  }

}
