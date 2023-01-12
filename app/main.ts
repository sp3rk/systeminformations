import * as fs from 'fs';
import * as path from 'path';
import * as si from 'systeminformation';

import { BrowserWindow, Menu, MenuItemConstructorOptions, app, dialog, ipcMain, shell } from 'electron';

let win: BrowserWindow = null;
let staticData: si.Systeminformation.StaticData = null;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');
const isMac = process.platform === 'darwin'

const menu = Menu.buildFromTemplate(
  [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []) as MenuItemConstructorOptions[],
    // { role: 'fileMenu' }
    {
      label: 'File',
      submenu: [{ label: 'Save', click: () => { saveData(); }, accelerator: "CmdOrCtrl+S", },
      isMac ? { role: 'close' } : { role: 'quit' }
      ] as MenuItemConstructorOptions[]
    },
    // { role: 'editMenu' }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac ? [
          { role: 'pasteAndMatchStyle' },
          { role: 'delete' },
          { role: 'selectAll' },
          { type: 'separator' },
          {
            label: 'Speech',
            submenu: [
              { role: 'startSpeaking' },
              { role: 'stopSpeaking' }
            ]
          }
        ] : [
          { role: 'delete' },
          { type: 'separator' },
          { role: 'selectAll' }
        ]) as MenuItemConstructorOptions[]
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ]) as MenuItemConstructorOptions[]
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
);

Menu.setApplicationMenu(menu)


function createWindow(): BrowserWindow {
  // const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    // x: 0,
    // y: 0,
    // width: size.width,
    // height: size.height,
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve),
      contextIsolation: false,  // false if you want to run e2e test with Spectron
    },
  });

  if (serve) {
    const debug = require('electron-debug');
    debug();

    require('electron-reloader')(module);
    win.loadURL('http://localhost:4200');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/index.html';
    }

    const url = new URL(path.join('file:', __dirname, pathIndex));
    win.loadURL(url.href);
  }

win.on('ready-to-show', () => {
  getStaticData();
});

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  // cpuData();

  return win;
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}

async function saveData() {

  dialog.showSaveDialog({ title: 'save StaticData', defaultPath: path.join(__dirname, 'systeminformations.json') }).then(async (data) => {
    const PATH = data.filePath;
    if (!data.canceled && PATH) {

      fs.writeFile(PATH, JSON.stringify(staticData), (err) => {
        if (err) { console.error(err); }
        else {
          console.debug('write file to: ', PATH);
          dialog.showMessageBox(null, {
            type: 'info',
            buttons: ['Ok'],
            message: `write file to: ${PATH}`
          });
        }
      });
    }
  });
}

async function getStaticData(): Promise<si.Systeminformation.StaticData> {
  return new Promise(async (resolve, reject) => {
    if(staticData) {
      resolve(staticData);
    } else {
      staticData = await si.getStaticData();
      resolve(staticData);
    }
  });
}

ipcMain.handle('si-getStaticData', () => {
  return getStaticData();
});

ipcMain.handle('si-getDynamicData', () => {
  return si.getDynamicData();
});

ipcMain.handle('si-users', () => {
  return si.users();
});
