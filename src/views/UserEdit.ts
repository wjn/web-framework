import { View, UserForm, UserShow } from './';
import { User } from '../models';
import { UserProps } from '../interfaces';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '#user-show',
      userForm: '#user-form',
    };
  }

  onRender(): void {
    if (this.regions.userShow) {
      new UserShow(this.regions.userShow, this.model).render();
    }
    if (this.regions.userForm) {
      new UserForm(this.regions.userForm, this.model).render();
    }
  }

  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
