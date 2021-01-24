import { User } from './models/User';
const user = new User({ id: 2, name: 'Gandalf the White' });
user.save();

user.on('change', () => {
  console.log('-------------> USER CHANGED', user.get('name'));
});

user.fetch();
