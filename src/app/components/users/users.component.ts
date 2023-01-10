import * as si from 'systeminformation';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: si.Systeminformation.UserData[];

  constructor() {

  }

  ngOnInit(): void {
    console.log('UsersComponent -> ngOnInit()');
  }

}
