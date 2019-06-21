#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function main() {
  exec('print Hello');
}

main();
