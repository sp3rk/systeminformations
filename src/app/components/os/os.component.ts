import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss']
})
export class OsComponent implements OnInit {
  @Input() os: si.Systeminformation.OsData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('OsComponent -> ngOnInit()');
  }

}
