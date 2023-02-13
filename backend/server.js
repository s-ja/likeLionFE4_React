import liveServer from 'live-server';
import { resolve } from 'node:path';
import { argv } from 'node:process';
import parseArgv from './parseArgv.js';

/* directories -------------------------------------------------------------- */

const frontendDir = resolve('frontend');

const DIR = {
  public: resolve(frontendDir, 'public'),
  src: resolve(frontendDir, 'src'),
};

/* parameters --------------------------------------------------------------- */

let params = {
  host: 'localhost',
  port: 3000,
  root: DIR.public,
  file: 'index.html', // entry point(file)
  mount: [['/scripts', DIR.src]], //route
  open: false,
  wait: 200,
};

const customParams = parseArgv(argv);

// 전개구문 (spread sytax) - 객체 합성
params = { ...params, ...customParams };

/* start server ------------------------------------------------------------- */

liveServer.start({ ...params, ...customParams });
