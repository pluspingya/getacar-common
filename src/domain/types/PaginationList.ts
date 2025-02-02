type PaginationList<T> = {
  items: T[];
  pagination: {
    next?: {
      id: string;
      take: number;
    };
    prev?: {
      id: string;
      take: number;
    };
  };
  total: number;
}

export default PaginationList;