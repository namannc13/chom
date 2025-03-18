import { BlogMeta } from "@/types";
import { blogsMeta } from "@/data/blogs";

export async function getAllBlogsMeta(): Promise<BlogMeta[]> {
  return blogsMeta;
}

export async function getBlogBySlug(
  slug: string
): Promise<{ meta: BlogMeta; content: string }> {
  const meta = blogsMeta.find((blog) => blog.slug === slug);

  if (!meta) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }

  const response = await fetch(`/blogs/${slug}.md`);
  const content = await response.text();

  console.log(response);
  console.log(content);

  return { meta, content };
}
