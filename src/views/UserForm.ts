import { UserProps } from '../interfaces';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#setRandomAge': this.onSetAgeClick,
      'click:button#setName': this.onSetNameClick,
      'click:button#saveModel': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <div id="buttons">
          <button id="setName" class="action" >Change Name</button>
          <button id="setRandomAge" class="action" >Set Random Age</button>
          <button id="saveModel">Save User</button>
        </div>
      </div>
    `;
  }
}
