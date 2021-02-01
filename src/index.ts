import { UserEdit } from './views';
import { User } from './models';

const user = User.buildUser({ name: 'Frodo', age: 327 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root Element not found');
}
