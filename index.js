const globalkey = require('globalkey');

globalkey.start(
  down => {
    if (down[0] === 'Meta' && down[1] === 'Tab') {
      console.log('You switched windows');
    }
  },
  _up => {}
);

console.log('Globalkey starts a non blocking thread so you can see this message after calling start');

console.log('You can stop globalkey at any time with globalkey.stop()');

setTimeout(() => globalkey.stop(), 3000);
