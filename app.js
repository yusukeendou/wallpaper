var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.dock.hide();

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 1680,
    height: 1050,
    type: "desktop",
    frame: false
  });
  mainWindow.setPosition(0, 0);
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
