import OffsetPagination from './OffsetPagination';

type OffsetPaginationList<T> = {
  items: T[];
  pagination: OffsetPagination;
  total: number;
};

export default OffsetPaginationList;
