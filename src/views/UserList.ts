import { UserProps } from '../interfaces';
import { User } from '../models';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(itemParent: Element, model: User): void {
    new UserShow(itemParent, model).render();
  }
}
