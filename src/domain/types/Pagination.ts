type Pagination = {
  next?: {
    id: string;
    take: number;
  };
  prev?: {
    id: string;
    take: number;
  };
};

export default Pagination;
