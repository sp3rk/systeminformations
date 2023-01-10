import * as si from 'systeminformation';

import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  staticData$: Observable<si.Systeminformation.StaticData>;
  users$: Observable<si.Systeminformation.UserData[]>;
  dynamicData$: Observable<si.Systeminformation.DynamicData>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log('HomeComponent -> ngOnInit');
    this.staticData$ = this.dataService.staticData$;
    this.users$ = this.dataService.usercData$;
    this.dynamicData$ = this.dataService.dynamicData$;
  }

}
