import Heading from "@/components/heading";
import { TextScramble } from "@/components/ui/text_scramble";
import { getAllBlogsMeta } from "@/services/blogService";
import { useState } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { BlogMeta } from "@/types";
import { Loader2 } from "lucide-react";
import Blog from "@/components/blog";
import Para from "@/components/para";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading className="text-4xl">
        <i className="hgi hgi-stroke hgi-magic-wand-02 text-accent-foreground"></i>
        <TextScramble speed={0.005} duration={1}>
          Blogs
        </TextScramble>
      </Heading>
      <Para>
        Make sure to check some of my blogs. I write about my experiences,
        thoughts and learnings on various topics.
      </Para>
    </motion.div>
  );
}

function Blogs() {
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogsData = await getAllBlogsMeta();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-16">
      <TopSection />

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      ) : (
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-4 rounded">
              <Blog {...blog} />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Blogs;
