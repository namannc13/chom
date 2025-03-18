import Para from "./para";
import Badge from "./badge";
import Heading from "./heading";
import Link from "./link";
import dayjs from "dayjs";

function Blog({
  title,
  date,
  summary,
  tags,
  slug,
}: {
  title: string;
  date: string;
  summary: string;
  tags: { id: number; name: string }[];
  slug: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
        <Heading className="text-xl">{title}</Heading>
        <Para className="!leading-normal">{dayjs(date).format("MMMM D YYYY")}</Para>
      </div>
      <Para className="!leading-normal">{summary}</Para>
      <div className="flex flex-wrap gap-2 pt-2 pb-1">
        {tags.map((tag) => (
          <Badge id={tag.id} key={tag.id}>
            {tag.name}
          </Badge>
        ))}
      </div>

      <Link
        className="text-primary hover:text-accent-foreground text-start"
        to={`/blogs/${slug}`}
        inline
      >
        Read More
      </Link>
    </div>
  );
}

export default Blog;
