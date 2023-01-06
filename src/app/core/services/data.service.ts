/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */

import * as si from 'systeminformation';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IpcService } from './electron/ipc.service';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private readonly _system = new BehaviorSubject<si.Systeminformation.SystemData>(null);
    readonly system$ = this._system.asObservable();

    private readonly _cpu = new BehaviorSubject<si.Systeminformation.CpuData>(null);
    readonly cpu$ = this._cpu.asObservable();

    constructor(private ipc: IpcService) {
        this.loadData();
    }

    async loadData() {
        this._system.next(await this.ipc.invoke('si-system'));
        this._cpu.next(await this.ipc.invoke('si-cpu'));
    }


}
