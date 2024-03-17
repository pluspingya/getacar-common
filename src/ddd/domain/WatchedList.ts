export default abstract class WatchedList<ItemType> {
  currentItems: ItemType[];

  protected initial: ItemType[];
  protected new: ItemType[];
  protected removed: ItemType[];

  protected constructor(initialItems?: ItemType[]) {
    this.currentItems = initialItems || [];
    this.initial = initialItems || [];
    this.new = [];
    this.removed = [];
  }

  abstract compareItems(a: ItemType, b: ItemType): boolean;

  get isModified(): boolean {
    return this.getNewItems().length > 0 || this.getRemovedItems().length > 0;
  }

  getItems(): ItemType[] {
    return this.currentItems;
  }

  getNewItems(): ItemType[] {
    return this.new;
  }

  getRemovedItems(): ItemType[] {
    return this.removed;
  }

  getUnchangedItems(): ItemType[] {
    const addedItems = new Set(this.getNewItems());
    return this.currentItems.filter((item: ItemType) => !addedItems.has(item));
  }

  protected isCurrentItem(item: ItemType): boolean {
    return this.currentItems.find((currentItem) => this.compareItems(item, currentItem)) !== undefined;
  }

  exists(item: ItemType): boolean {
    return this.isCurrentItem(item);
  }

  private isNewItem(item: ItemType): boolean {
    return this.new.find((newItem) => this.compareItems(item, newItem)) !== undefined;
  }

  private isRemovedItem(item: ItemType): boolean {
    return this.removed.find((removedItem) => this.compareItems(item, removedItem)) !== undefined;
  }

  private removeFromNew(item: ItemType): void {
    this.new = this.new.filter((newItem) => !this.compareItems(newItem, item));
  }

  private removeFromCurrent(item: ItemType): void {
    this.currentItems = this.currentItems.filter((currentItem) => !this.compareItems(currentItem, item));
  }

  private removeFromRemoved(item: ItemType): void {
    this.removed = this.removed.filter((removedItem) => !this.compareItems(item, removedItem));
  }

  private wasAddedInitially(item: ItemType): boolean {
    return this.initial.find((initialItem) => this.compareItems(item, initialItem)) !== undefined;
  }

  add(item: ItemType): void {
    if (!this.isRemovedItem(item)) {
      this.removeFromRemoved(item);
    }

    if (!this.isNewItem(item) && !this.wasAddedInitially(item)) {
      this.new.push(item);
    }

    if (!this.isCurrentItem(item)) {
      this.currentItems.push(item);
    }
  }

  remove(item: ItemType): void {
    this.removeFromCurrent(item);

    if (this.isNewItem(item)) {
      this.removeFromNew(item);
      return;
    }

    if (!this.isRemovedItem(item)) {
      this.removed.push(item);
    }
  }

  getImmutable(): ImmutableWatchedList<this> {
    return this;
  }
}

export type ImmutableWatchedList<WatchedListType extends WatchedList<any>> = Omit<WatchedListType, 'add' | 'remove'>;