const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('winAPI', {
  min: function() { ipcRenderer.send('win-min'); },
  max: function() { ipcRenderer.send('win-max'); },
  close: function() { ipcRenderer.send('win-close'); }
});
