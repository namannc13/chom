import Para from "./para";
import Badge from "./badge";
import Highlight from "./highlight";
import Heading from "./heading";
import OuterLink from "./outer_link";

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
      <OuterLink to={deployedLink}>{deployment}</OuterLink>
      <OuterLink to={githubLink}>{github}</OuterLink>
      <div className="flex flex-wrap gap-2 pt-2 pb-1">
        {technologies.map((technology) => (
          <Badge id={technology.id} key={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
      {description.map((item, index) => (
        <Para className=" flex gap-2" key={index}>
          <i className="hgi hgi-stroke hgi-arrow-right-01 "></i>
          <div>
            {item.map((segment, i) =>
              segment.highlight ? (
                <Highlight key={i}>{segment.text}</Highlight>
              ) : (
                segment.text
              )
            )}
          </div>
        </Para>
      ))}
    </div>
  );
}

export default Project;
