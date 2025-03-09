import Link from "./link";
import Para from "./para";
import Badge from "./badge";
import Highlight from "./highlight";

function Project({
  name,
  link,
  deployment,
  deployedLink,
  description,
  technologies,
  year,
}: {
  name: string;
  link: string;
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
        <Link href={link} className="underline underline-offset-4">
          {name}
        </Link>
        <Para className="!leading-normal">{year}</Para>
      </div>
      <Link href={deployedLink} className="underline underline-offset-4">
        {deployment}
      </Link>
      <div className="flex flex-wrap gap-2 pt-2">
        {technologies.map((technology) => (
          <Badge key={technology.id} id={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
      <Para className="!leading-normal pt-2">
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
