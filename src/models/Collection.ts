import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public baseURL: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.baseURL).then((res: AxiosResponse) => {
      res.data.forEach((element: K) => {
        this.models.push(this.deserialize(element));
      });

      this.trigger('change');
    });
  }
}
