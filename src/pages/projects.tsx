import Heading from "@/components/heading";
import { TextScramble } from "@/components/ui/text_scramble";
import Para from "@/components/para";
import Highlight from "@/components/highlight";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import Project from "@/components/project";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading className="text-3xl">
        <i className="hgi hgi-stroke hgi-magic-wand-02"></i>
        <TextScramble speed={0.005} duration={1}>
          Projects
        </TextScramble>
      </Heading>
      <Para>
        Here are some of the Projects that I have worked on. Feel free to
        checkout the <Highlight>Github Links</Highlight> for the same and
        contribute to it.
      </Para>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col gap-16">
      <TopSection />

      <motion.div
        className="flex flex-col gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded">
            <Project {...project} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
