import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './interfaces/UserProps';
import { User } from './models';

const baseUrl = 'http://localhost:3000';
const users = new Collection(`${baseUrl}/users`, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
