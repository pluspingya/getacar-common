export type OffsetPaginationList<T> = {
  items: T[];
  pagination: {
    offset: number;
    limit: number;
  };
  total: number;
};

export default OffsetPaginationList;
