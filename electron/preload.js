const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Add safe APIs here
    ping: () => 'pong',
});
