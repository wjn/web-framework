import { Callback } from '../typings/Callback';
export class Eventing {
  public events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // make handlers an array, empty or of callbacks
    const handlers = this.events[eventName] || [];
    // add callback the array
    handlers.push(callback);
    // assign array to events.eventName
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    // if undefined or empty
    if (!handlers || handlers.length === 0) {
      return;
    }

    // call all the arrayed callbacks for an eventType
    handlers.forEach((callback) => {
      callback();
    });
  };
}
