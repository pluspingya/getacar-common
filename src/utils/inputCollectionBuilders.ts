import { WatchedList } from '../ddd';

type HasStringId = { id: string };

type PartialWatchedList<ListItemType> = Pick<WatchedList<ListItemType>, 'getNewItems' | 'getRemovedItems' | 'getUnchangedItems' | 'getItems'>;

export const buildNewConnectionInput = <ListItemType extends HasStringId>(
  item: ListItemType | undefined,  
): { connect: { id: string } } | undefined => {
  if (!item) return;
  return { connect: { id: item.id } }
}

export const buildNewConnectionInputs = <ListItemType extends HasStringId>(
  list: PartialWatchedList<ListItemType> | undefined,
): { connect: HasStringId[] } | undefined => {
  if (!list || list.getItems().length === 0) return;
  return { connect: list.getItems().map((item) => ({ id: item.id })) }
}

export const buildNestedCreateInputs = <ListItemType extends HasStringId, CreateInputType>(
  list: PartialWatchedList<ListItemType> | undefined,
  inputMapper: (item: ListItemType) => CreateInputType,
): { create: CreateInputType[] } | undefined => {
  if (!list || list.getNewItems().length === 0) return;
  return { create: list.getItems().map(inputMapper) }
}

export const buildNestedUpdateInputs = <ListItemType extends HasStringId, CreateInputType, UpdateInputType>(
  list: PartialWatchedList<ListItemType> | undefined,
  createMapper: (item: ListItemType) => CreateInputType,
  updateMapper: (item: ListItemType) => UpdateInputType,
):
  | { create?: CreateInputType[]; updateMany?: { data: UpdateInputType; where: HasStringId }[]; delete?: HasStringId[] }
  | undefined => {
  if (!list) return;
  const itemsToCreate = list.getNewItems();
  const itemsToUpdate = list.getUnchangedItems();
  const itemsToDelete = list.getRemovedItems();
  if (itemsToCreate.length + itemsToUpdate.length + itemsToDelete.length === 0) return;
  return {
    create: itemsToCreate.length ? itemsToCreate.map(createMapper) : undefined,
    delete: itemsToDelete.length ? itemsToDelete.map((item) => ({ id: item.id })) : undefined,
    updateMany: itemsToUpdate.length ? itemsToUpdate.map((item) => ({ data: updateMapper(item), where: { id: item.id } })) : undefined,
  }
};

export const buildUpdateConnectionInputs = <ListItemType extends HasStringId>(
  list: PartialWatchedList<ListItemType> | undefined,
): { connect?: HasStringId[]; disconnect?: HasStringId[] } | undefined => {
  const itemsToConnect = list?.getNewItems() || [];
  const itemsToDisconnect = list?.getRemovedItems() || [];
  if (itemsToConnect.length + itemsToDisconnect.length === 0) return undefined;

  return {
    connect: itemsToConnect.length ? itemsToConnect.map((item) => ({ id: item.id })) : undefined,
    disconnect: itemsToDisconnect.length ? itemsToDisconnect.map((item) => ({ id: item.id })) : undefined,
  };
};