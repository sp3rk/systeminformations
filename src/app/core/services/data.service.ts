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

    private readonly _staticData = new BehaviorSubject<si.Systeminformation.StaticData>(null);
    readonly staticData$ = this._staticData.asObservable();

    private readonly _dynamicData = new BehaviorSubject<si.Systeminformation.DynamicData>(null);
    readonly dynamicData$ = this._dynamicData.asObservable();

    private readonly _userData = new BehaviorSubject<si.Systeminformation.UserData[]>(null);
    readonly usercData$ = this._userData.asObservable();

    constructor(private ipc: IpcService) {
        this.loadData();
    }

    async loadData() {
        this._staticData.next(await this.ipc.invoke('si-getStaticData'));
        this._userData.next(await this.ipc.invoke('si-users'));

        // this._dynamicData.next(await this.ipc.invoke('si-getDynamicData'));
    }


}
