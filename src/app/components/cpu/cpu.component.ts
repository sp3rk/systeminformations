import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss']
})
export class CpuComponent implements OnInit {

  @Input() cpu: si.Systeminformation.CpuData;

  constructor() {}

  ngOnInit(): void {
    console.log('CpuComponent -> ngOnInit()');
  }

}
