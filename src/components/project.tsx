import Link from "./link";
import Para from "./para";
import Badge from "./badge";

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
  description: string;
  technologies: {
    id: number;
    name: string;
  }[];
  year: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Link href={link} className="underline underline-offset-4">
          {name}
        </Link>
        <Para>{year}</Para>
      </div>
      <Link href={deployedLink} className="underline underline-offset-4">
        {deployment}
      </Link>
      <Para>{description}</Para>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge key={technology.id} id={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default Project;
