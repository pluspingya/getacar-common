import BlogStatus from '../../domain/enums/BlogStatus';

type BlogDTO = {
  id: string;
  status: BlogStatus;
  title: string;
  content: string;
  author: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export default BlogDTO;