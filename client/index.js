import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import NotificationManager from './src/main/NotificationManager';
const notification = new NotificationManager();
notification.url = 'mqtt://localhost';

var mainWindow;

app.once('ready', ()=> {
	mainWindow = new BrowserWindow({
        width: 1024, 
        height: 700,
        webPreferences: {
            backgroundThrottling: false
        }
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file:///' + path.join(__dirname, 'index.html'));
    console.log('a');
    notification.webContent = mainWindow;
    notification.connect();
});
