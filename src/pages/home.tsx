import Badge from "@/components/badge";
import Heading from "@/components/heading";
import Highlight from "@/components/highlight";
import Link from "@/components/link";
import OuterLink from "@/components/outer_link";
import Para from "@/components/para";
import Project from "@/components/project";
import Section from "@/components/section";
import { InView } from "@/components/ui/in_view";
import { TextScramble } from "@/components/ui/text_scramble";
import Work from "@/components/work";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { work } from "@/data/work";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div
        className="flex flex-col gap-2"
      >
        <Heading className="text-4xl">
          <TextScramble speed={0.005} duration={1}>
            Naman Chawhan
          </TextScramble>
        </Heading>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <Heading className="text-muted-foreground" variant="faded">
            Full Stack Developer / Software Developer
          </Heading>
          <Heading
            className="text-muted-foreground flex items-center gap-2"
            variant="faded"
          >
            <i className="hgi hgi-stroke hgi-location-01"></i>
            Mumbai, India
          </Heading>
        </div>
      </div>
      <Para>
        Full Stack Developer who loves turning coffee into clean code solutions.
        I'm currently working as a{" "}
        <Highlight>Data Management Specialist</Highlight> at{" "}
        <OuterLink
          to="https://www.acies.consulting/"
          className="text-primary hover:text-accent-foreground"
          inline
        >
          Acies LLP
        </OuterLink>
      </Para>
    </motion.div>
  );
}

function Home() {
  return (
    <>
      <div className="flex flex-col gap-16">
        <TopSection />

        <Section header="Work">
          <div className="flex flex-col gap-8 sm:gap-4">
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

        <Section header="Projects">
          <div className="grid grid-cols-1 gap-8 sm:gap-4">
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
          <Link to="/projects" className="text-accent-foreground hover:text-foreground">
            All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Section>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Section header="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.id} id={skill.id}>
                  {skill.name}
                </Badge>
              ))}
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
            <div className="flex flex-col gap-4 sm:border sm:p-4 sm:rounded sm:hover:border-accent-foreground sm:hover:cursor-pointer">
              <Para>
                I love creating{" "}
                <Highlight>simple and clean-looking websites</Highlight> that
                not only look great but also help people.{" "}
                <Highlight>Both Aesthetics and Functionality matter!</Highlight>
                .
              </Para>
              <Para>
                I'm always excited to try out{" "}
                <Highlight>new programming languages</Highlight> as they emerge
                on the internet.
              </Para>
              <Para>
                <Highlight>Music is a huge part of my life</Highlight> - I
                probably listen to music more than I should. Check out my{" "}
                <OuterLink
                  to="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9"
                  className="text-primary hover:text-accent-foreground"
                  inline
                >
                  Playlist
                </OuterLink>
                .
              </Para>
              <Para>
                When I'm not coding or vibing to music, you will find me playing
                competitive shooters like <Highlight>Valorant</Highlight>,{" "}
                <Highlight>Marvel Rivals</Highlight>, or battling it out in
                platform fighters like <Highlight>Brawlhalla</Highlight>.
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
              <div className="flex gap-4 flex-wrap">
                <OuterLink
                  to="https://www.linkedin.com/in/naman-chawhan/"
                  className="text-primary hover:text-accent-foreground"
                  inline
                >
                  LinkedIn
                </OuterLink>
                <OuterLink
                  to="https://github.com/namannc13"
                  className="text-primary hover:text-accent-foreground"
                  inline
                >
                  GitHub
                </OuterLink>
              </div>
            </div>
          </Section>
        </InView>
      </div>
    </>
  );
}

export default Home;
