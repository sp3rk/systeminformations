import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {
  @Input() versions: si.Systeminformation.VersionData;

  constructor() {

  }

  ngOnInit(): void {
    console.log('VersionsComponent -> ngOnInit()');
  }

}
