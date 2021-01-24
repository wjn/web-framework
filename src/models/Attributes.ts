export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * <K extends keyof T> is a generic constraint limiting K to the keys of T
   * K then is limited to the Keys of the type passed in.
   * T[K] will look up the type for the K of T
   *
   * Must use arrow function syntax to guarantee that `this` is always referring
   * to our Attributes class and not the class in which it's called.
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
