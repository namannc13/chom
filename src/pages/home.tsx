import Heading from "@/components/heading";
import Highlight from "@/components/highlight";
import Link from "@/components/link";
import Para from "@/components/para";
import Project from "@/components/project";
import Section from "@/components/section";
import { InView } from "@/components/ui/in_view";
import { TextEffect } from "@/components/ui/text_effect";
import { TextScramble } from "@/components/ui/text_scramble";
import Work from "@/components/work";
import { projects } from "@/data/projects";
import { work } from "@/data/work";
import { motion } from "motion/react";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-2">
        <Heading className="text-3xl">
          <TextScramble speed={0.005} duration={1}>
            Naman Chawhan
          </TextScramble>
        </Heading>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <Heading className="text-muted-foreground ">
            <TextEffect per="char" preset="fade">
              Full Stack Developer
            </TextEffect>
          </Heading>
          <Heading className="text-muted-foreground flex items-center gap-2">
            <i className="hgi hgi-stroke hgi-location-01"></i>
            <TextEffect per="char" preset="fade">
              Chandigarh, India
            </TextEffect>
          </Heading>
        </div>
      </div>
      <Para>
        Full Stack Developer who loves turning coffee into clean code solutions.
        I'm currently working as a{" "}
        <Highlight>Product Development Intern</Highlight> at{" "}
        <Link href="https://agnext.com/">AgNext Technologies</Link>
      </Para>
    </motion.div>
  );
}

function Home() {
  return (
    <>
      <div className="flex flex-col gap-16">
        <TopSection />

        <Section header="Work" className="gap-8">
          <div className="flex flex-col gap-8">
            {work.map((work) => (
              <Work
                key={work.id}
                name={work.name}
                company={work.company}
                duration={work.duration}
                description={work.description}
                technologies={work.technologies}
              />
            ))}
          </div>
        </Section>

        <Section header="Projects" className="gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project) => (
              <Project
                key={project.id}
                name={project.name}
                github={project.github}
                githubLink={project.githubLink}
                deployment={project.deployment}
                deployedLink={project.deployedLink}
                description={project.description}
                technologies={
                  project.technologies as { id: number; name: string }[]
                }
                year={project.year}
              />
            ))}
          </div>
        </Section>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Section header="Blogs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground italic">
                  Coming Soon
                </p>
              </div>
            </div>
          </Section>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Section header="Me">
            <div className="flex flex-col gap-4">
              <Para>
                All I want to do is <Highlight>build websites</Highlight> that
                help people and that help me grow as a developer
              </Para>
              <Para>
                Currently, I'm focused on{" "}
                <Highlight>exploring modern web technologies</Highlight> and{" "}
                <Highlight>trying out new Languages</Highlight>. When I'm not
                coding, I'm reading about new developments in tech or{" "}
                <Highlight>contributing to open-source projects</Highlight>
              </Para>
              <Para>
                <Highlight>I love listening to music</Highlight> of all genres.
                I probably listen to music more than I should. Check out my
                Playlist{" "}
                <Link href="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9">
                  Chom with me
                </Link>
              </Para>
            </div>
          </Section>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Section header="Connect">
            <div className="flex flex-col gap-4">
              <Para>
                I'm always looking for new opportunities to learn and grow. If
                you have any questions, please don't hesitate to{" "}
                <Highlight>reach out</Highlight>.
              </Para>
              <div className="flex gap-4 flex-wrap">
                <Link href="https://www.linkedin.com/in/naman-chawhan/">
                  LinkedIn
                </Link>
                <Link href="https://github.com/namannc13">GitHub</Link>
              </div>
            </div>
          </Section>
        </InView>
      </div>
    </>
  );
}

export default Home;
