'use strict';
const spawn = require('child_process').spawn;
const child = spawn('node', [process.env.NODE_FILE], {
  cwd: __dirname,
  stdio: 'inherit',
  env: process.env,
});

child.on('close', function(code) {
  process.exit(code);
});
