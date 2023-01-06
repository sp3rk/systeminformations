/* eslint-disable no-underscore-dangle */

import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
    providedIn: 'root'
})


export class IpcService {
    private _ipc: IpcRenderer | undefined = void 0;

    constructor() {
        if (window.require) {
            try {
                this._ipc = window.require('electron').ipcRenderer;
            } catch (e) {
                throw e;
            }
        } else {
            console.warn('Electron\'s IPC was not loaded');
        }
    }

    /**
     * Listens to channel, when a new message arrives listener would be called with listener(event, args...).
     *
     * @param channel String
     * @param listener Function (event, args)
     */
    public on(channel: string, listener): void {
        if (!this._ipc) {
            return;
        }
        this._ipc.on(channel, listener);
    }

    /**
     * Adds a one time listener function for the event.
     * This listener is invoked only the next time a message is sent to channel, after which it is removed.
     *
     * @param channel String
     * @param listener Function (event, args)
     */
    public once(channel: string, listener): void {
        if (!this._ipc) {
            return;
        }
        this._ipc.once(channel, listener);
    }

    /**
     * Send a message to the main process asynchronously via channel,
     * you can also send arbitrary arguments. Arguments will be serialized
     * as JSON internally and hence no functions or prototype chain will
     * be included.
     *
     * @param channel String
     * @param args any[]
     */
    public send(channel: string, ...args): void {
        if (!this._ipc) {
            return;
        }
        this._ipc.send(channel, ...args);
    }

    public invoke(channel: string, ...args): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this._ipc) {
                reject();
            }
            if (this._ipc) {
                resolve(this._ipc.invoke(channel, ...args));
            }
        });
    }

}
