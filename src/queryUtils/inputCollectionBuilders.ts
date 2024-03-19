import { WatchedList } from '../ddd';

type HasStringId = { id: string };

type PartialWatchedList<ListItemType> = Pick<WatchedList<ListItemType>, 'getNewItems' | 'getRemovedItems' | 'getUnchangedItems' | 'getItems'>;

export const buildNestedCreateInputs = <ListItemType extends HasStringId, CreateInputType>(
  list: PartialWatchedList<ListItemType> | undefined,
  inputMapper: (item: ListItemType) => CreateInputType,
): { create: CreateInputType[] } | undefined => {
  if (!list || list.getNewItems().length === 0) return;
  return { create: list.getItems().map(inputMapper) }
}