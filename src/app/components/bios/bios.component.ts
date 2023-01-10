import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.scss']
})
export class BiosComponent implements OnInit {
  @Input() bios: si.Systeminformation.BiosData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('BiosComponent -> ngOnInit()');
  }

}
