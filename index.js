const winston = require('winston');
const colors = require('colors/safe');

const config = winston.config;
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: function() {
        return Date.now();
      },
      prettyPrint: true,
      formatter: function(options) {
        try{
        // console.log(options);
        const line = new Error().stack.split('\n')[10];
        const filename = line.split('/').slice(-1)[0].split(')')[0];
        const lineargs = line.trim().split(' ');
        const func = lineargs.length > 2 ? lineargs[1] : '';
        // console.log(new Error());
        const metaString = options.meta && options.meta.message && options.meta.stack ? (function(){
          return `${options.meta.message} \n ${options.meta.stack}`;
        })(): (function(){
          return options.meta && Object.keys(options.meta).length > 0 ? JSON.stringify(options.meta) : '';
        })();

        return new Date().toString() + ' [' + colors.underline(func + ' - ' + filename) + '] ' +
                  config.colorize(options.level, options.level.toUpperCase()) + ' ' +
                  (options.message ? options.message : '') + ' ' +
                  metaString;
                  // (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        } catch (e) {
          return JSON.stringify(options);
        }
      }
    }),
    // new (winston.transports.File)({ filename: 'somefile.log' })
  ]
});
module.exports = logger;
