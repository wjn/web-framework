import axios, { AxiosPromise } from 'axios';
import { HasId } from '../interfaces';

export class ApiSync<T extends HasId> {
  constructor(public baseURL: string) {
    // remove trailing slash from baseUrl
    this.baseURL = baseURL.replace(/\/$/, '');
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    // type guard for id : number | undefined
    // remember that id === 0 would return falsey here.
    if (!id && id !== 0) {
      return axios.post(`${this.baseURL}`, data);
    } else {
      // put() would delete properties not passed in,
      // patch() seems to be the truer update
      return axios.patch(`${this.baseURL}/${id}`, data);
    }
  }
}
