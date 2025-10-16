type SortQuery<T = string> = {
  sortBy?: T;
  sortDirection?: 'asc' | 'desc';
}

export default SortQuery;