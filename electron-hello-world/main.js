const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url');

// Global window object
let win;

function createWindow() {
  // Create new browser window
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load index.html of app
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open devtools
  win.webContents.openDevTools();

  // When the window is closed, we can dereference window object
  win.on('closed', () => {
    win = null;
  });
}

// Create window after electron has finished initialization
app.on('ready', createWindow);

// When all windows are closed, quit
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// If we activate the app when no other windows are open (ex. click open app in dock that has no windows open)
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

