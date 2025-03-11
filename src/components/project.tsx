import Link from "./link";
import Para from "./para";
import Badge from "./badge";
import Highlight from "./highlight";
import Heading from "./heading";

function Project({
  name,
  github,
  githubLink,
  deployment,
  deployedLink,
  description,
  technologies,
  year,
}: {
  name: string;
  github: string;
  githubLink: string;
  deployment: string;
  deployedLink: string;
  description: { text: string; highlight?: boolean }[][];
  technologies: {
    id: number;
    name: string;
  }[];
  year: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Heading className="text-xl">{name}</Heading>
        <Para className="!leading-normal">{year}</Para>
      </div>
      <Link
        href={deployedLink}
        className="text-muted-foreground hover:text-primary text-sm"
      >
        {deployment}
      </Link>
      <Link
        href={githubLink}
        className="text-muted-foreground hover:text-primary text-sm"
      >
        {github}
      </Link>
      <div className="flex flex-wrap gap-2 pt-2 pb-1">
        {technologies.map((technology) => (
          <Badge key={technology.id} id={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
      <Para className="flex gap-2">
        {description.map((item, index) => (
          <div key={index}>
            {item.map((segment, i) =>
              segment.highlight ? (
                <Highlight key={i}>{segment.text}</Highlight>
              ) : (
                segment.text
              )
            )}
          </div>
        ))}
      </Para>
    </div>
  );
}

export default Project;
