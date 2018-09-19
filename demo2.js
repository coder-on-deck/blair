const logger = require('./index');
logger.info('hello world!', {hello:'world'});
function demoFunc () {
logger.info('lets log already!');
logger.error('lets log error already!', new Error('oh no!'));
}
demoFunc();
