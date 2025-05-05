#!/usr/bin/env node

import updateNotifier from 'update-notifier';
import pkg from './package.json' assert { type: 'json' };

import { Command }  from 'commander';
const program = new Command();


// Every 24 hours notification 
// updateNotifier({ pkg, updateCheckInterval: 1000 * 60 * 60 * 24 }).notify();

const notifier = updateNotifier({ pkg, updateCheckInterval: 1000 * 30 });

notifier.notify();

function hello() {
 const program = new Command();
 const version =  program.version(pkg.version);
  console.log('👋 Hello from your CLI, Praveenbabu! version - v'+version.version());
    return "👋 Hello from your CLI, Praveenbabu! version - v"+version.version();
  }
// Export the hello function
hello()
export default hello;