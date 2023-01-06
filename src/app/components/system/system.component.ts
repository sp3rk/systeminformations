import * as si from 'systeminformation';

import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  system$: Observable<si.Systeminformation.SystemData>;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    console.log('SystemComponent INIT');
    this.system$ = this.dataService.system$;
  }

}
