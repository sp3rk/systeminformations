import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.scss']
})
export class NetComponent implements OnInit {
  @Input() net: si.Systeminformation.NetworkInterfacesData[];

  constructor() {

  }

  ngOnInit(): void {
    console.log('NetComponent -> ngOnInit()');
  }

}
