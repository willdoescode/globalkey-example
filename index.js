const globalkey = require('globalkey');

globalkey.start(
  down => {
    if (down[0] === 'Meta' && down[1] === 'Tab') {
      console.log('You switched windows');
    }
  },
  up => {
    console.log(`${up} was released`);
  }
);

console.log('Globalkey starts a non blocking thread so you can see this message after calling start');
