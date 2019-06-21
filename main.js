#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
  await exec('print Hello');

  console.log('End');
}

main();
