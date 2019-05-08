/* eslint no-unused-vars: "off" */
const fs = require('fs');
const { spawn } = require('child_process');

const log = './out.log';
let seleniumServerProcess = null;

// delete log file before starting new selenium server
if (fs.existsSync(log)) {
  fs.unlinkSync(log, error => {
    if (error) throw error;
    console.log(`${log} was deleted`);
  });
}

// Logs - creates new log file
const out = fs.openSync(log, 'a');
const err = fs.openSync(log, 'a');

// install and run selenium server
seleniumServerProcess = spawn('yarn', ['run', 'selenium:setup'], {
  detached: true,
  stdio: ['ignore', out, err],
});
seleniumServerProcess.unref();
