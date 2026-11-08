const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 750,
    minHeight: 500,
    frame: false,
    title: 'Artemis',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenu(null);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

ipcMain.on('win-min', function() { if (mainWindow) mainWindow.minimize(); });
ipcMain.on('win-max', function() {
  if (mainWindow) {
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  }
});
ipcMain.on('win-close', function() { if (mainWindow) mainWindow.close(); });

app.on('window-all-closed', function() { app.quit(); });
app.on('activate', function() {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
