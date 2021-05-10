const globalkey = require('globalkey');

globalkey.start(x => {
  if (x[0] === 'Meta' && x[1] === 'Tab') {
    console.log('You switched windows');
  }
});

console.log('Globalkey starts a non blocking thread so you can see this message after calling start');
