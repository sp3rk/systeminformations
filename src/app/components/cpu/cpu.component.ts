import * as si from 'systeminformation';

import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss']
})
export class CpuComponent implements OnInit {

  cpu$: Observable<si.Systeminformation.CpuData>;

  constructor(private dataService: DataService) {
    this.cpu$ = this.dataService.cpu$;
  }

  ngOnInit(): void {
    console.log('CpuComponent INIT');
  }

}
