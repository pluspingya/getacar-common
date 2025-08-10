import Pagination from './Pagination';

type PaginationList<T> = {
  items: T[];
  pagination: Pagination;
  total: number;
}

export default PaginationList;