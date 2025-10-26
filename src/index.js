/* eslint-disable no-console */

'use strict';
// import { sequelize } from './db';

const { createServer } = require('./createServer');
const { sequelize } = require('./db');

sequelize.sync().then(() => {
  console.log('Database synced');
});

createServer().listen(5700, () => {
  console.log('Server is running on localhost:5700');
});
