import { Collection, Model } from '../models';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(itemParent: Element, model: T): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(itemParent, model);
      /**
       * templateElement.content is a mechanism for holding HTML that is not
       * to be rendered immediately when a page is loaded but may be
       * instantiated subsequently during runtime using JavaScript.
       * https://developer.mozilla.org/en-us/docs/Web/HTML/Element/template
       */
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}
