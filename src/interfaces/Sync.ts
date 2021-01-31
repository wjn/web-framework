import { AxiosPromise } from 'axios';
import { HasId } from './HasId';

export interface Sync<T extends HasId> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
