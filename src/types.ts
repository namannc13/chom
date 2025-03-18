export interface BlogMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: { id: number; name: string }[];
  slug: string;
}
