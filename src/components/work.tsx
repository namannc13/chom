import Heading from "./heading";
import Para from "./para";
import Highlight from "./highlight";
import Badge from "./badge";

function Work({
  name,
  company,
  duration,
  description,
  technologies,
}: {
  name: String;
  company: String;
  duration: String;
  description: { text: string; highlight?: boolean }[][];
  technologies: { id: number; name: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
        <Heading>{company}</Heading>
        <Para className="!leading-normal">{duration}</Para>
      </div>
      <Para className="!leading-normal">{name}</Para>
      <div className="flex flex-wrap gap-2 pt-1 pb-2">
        {technologies.map((technology) => (
          <Badge key={technology.id} id={technology.id}>
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

export default Work;
