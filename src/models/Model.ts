import { AxiosResponse } from 'axios';
import { Events, HasId, ModelAttributes, Sync } from '../interfaces';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  /**
   * return reference of the on() function from the eventing class.
   *
   * while it is possible to write:
   *    on = this.event.on
   *    trigger = this.events.trigger
   *    get = this.attributes.get
   *
   * It only works when we declare and assign our composition classes
   * IN THE CONSTRUCTOR. Should we have a situation where we declare in
   * the class and then assign within the constructor, the above pass-through
   * syntax would likely return errors like:
   *
   *    cannot find property trigger of undefined.
   *
   * Therefore, I'm leaving the getter functions in place as they will work in
   * any case.
   */

  // event listener
  get on() {
    return this.events.on;
  }

  //  event publisher
  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch a User without `id`.');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
