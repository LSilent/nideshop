'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: 'app_' + process.env.APPNAME,
      user: process.env.ACCESSKEY,
      password: process.env.SECRETKEY,
      prefix: 'nideshop_',
      encoding: 'utf8mb4'
    },
    mongo: {

    }
  }
};
