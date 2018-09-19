const logger = require('./index');
logger.info('hello world!', {hello:'world'});
//
// setTimeout(() => {
//   logger.info('timeout!')
// });
//
// Promise.resolve().then(r => {
//   logger.error('problem', new Error('oh no!'));
//   throw new Error('on no!');
// })
//
//
// function doSomething() {
//   logger.error(new Error('doSomething failed'));
// }
// doSomething();

function demo () {
logger.info('lets log already!');
logger.error('lets log error already!', new Error('oh no!'));
}
demo();
