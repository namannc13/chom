import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug } from "@/services/blogService";
import { BlogMeta } from "@/types";
import Heading from "@/components/heading";
import { motion } from "motion/react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import dayjs from "dayjs";
import Para from "@/components/para";
import Badge from "@/components/badge";

function TopSection({
  title,
  date,
  tags,
  summary,
}: {
  title: string;
  date: string;
  tags: { id: number; name: string }[];
  summary: string;
}) {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading className="text-4xl">{title}</Heading>
      <Para>
        <div className="flex flex-col gap-2">
          <Para>{summary}</Para>
          <Para>
            {tags.map((tag) => (
              <Badge key={tag.id} id={tag.id}>
                {tag.name}
              </Badge>
            ))}
          </Para>
          <Para>{dayjs(date).format("MMMM D YYYY")}</Para>
        </div>
      </Para>
    </motion.div>
  );
}

function Blog() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<{ meta: BlogMeta; content: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        if (!slug) {
          navigate("/blogs");
          return;
        }
        const blogData = await getBlogBySlug(slug);
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <p className="text-muted-foreground">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <TopSection
        title={blog?.meta.title || ""}
        date={blog?.meta.date || ""}
        tags={blog?.meta.tags || []}
        summary={blog?.meta.summary || ""}
      />

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="border p-4 rounded">
          <MarkdownRenderer content={blog?.content || ""} />
        </div>
      </motion.div>
    </div>
  );
}

export default Blog;
