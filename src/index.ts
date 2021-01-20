import { User } from './models/User';

const user = new User({ name: 'Sam', age: 26 });

user.on('change', () => {
  console.log('foo');
});
user.on('change', () => {
  console.log('bar');
});
user.on('change', () => {
  console.log('baz');
});
user.on('allTheThings', () => {
  console.log('fooBarBaz');
});

user.trigger('nope');
