import BlogStatus from '../../domain/enums/BlogStatus';
import JsonValue from '../../domain/types/JsonValue';

export type BlogDTO = {
  id: string;
  status: BlogStatus;
  title: string;
  htmlContent: string | null;
  jsonContent: JsonValue | null;
  author: string;
  keywords: string[];
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export default BlogDTO;