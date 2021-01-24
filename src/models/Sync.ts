import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public baseURL: string) {
    // remove trailing slash from baseUrl
    this.baseURL = baseURL.replace(/\/$/, '');
  }
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      const foo = id;
    } else {
      const bar = id;
    }
    // type guard for id : number | undefined
    if (!id) {
      return axios.post(`${this.baseURL}`, data);
    } else {
      // put() would delete properties not passed in,
      // patch() seems to be the truer update
      return axios.patch(`${this.baseURL}/${id}`, data);
    }
  }
}
