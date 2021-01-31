import { Callback } from '../typings/Callback';

export interface Events {
  on(eventName: string, callback: Callback);
  trigger(eventName: string): void;
}
