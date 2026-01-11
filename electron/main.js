const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
        frame: false, // Frameless window as per design
        backgroundColor: '#000000',
        titleBarStyle: 'hidden',
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:5173');
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // Window control IPC
    const { ipcMain } = require('electron');

    ipcMain.on('window-minimize', (event) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        if (win) win.minimize();
    });

    ipcMain.on('window-maximize', (event) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        if (win) {
            if (win.isMaximized()) {
                win.unmaximize();
            } else {
                win.maximize();
            }
        }
    });

    ipcMain.on('window-close', (event) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        if (win) win.close();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
