import Heading from "@/components/heading";
import Highlight from "@/components/highlight";
import Link from "@/components/link";
import Para from "@/components/para";
import Project from "@/components/project";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in_view";
import { TextEffect } from "@/components/ui/text_effect";
import { TextScramble } from "@/components/ui/text_scramble";
import Work from "@/components/work";
import { projects } from "@/data/projects";
import { work } from "@/data/work";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-2">
        <Heading className="text-4xl">
          <TextScramble speed={0.005} duration={1}>
            Naman Chawhan
          </TextScramble>
        </Heading>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <Heading className="text-muted-foreground" variant="faded">
            <TextEffect per="char" preset="fade">
              Full Stack Developer
            </TextEffect>
          </Heading>
          <Heading
            className="text-muted-foreground flex items-center gap-2"
            variant="faded"
          >
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
        <Link
          to="https://agnext.com/"
          className="text-primary hover:text-accent-foreground"
        >
          AgNext Technologies
        </Link>
      </Para>
    </motion.div>
  );
}

function Home() {
  const navigate = useNavigate();
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
          <Button
            variant="link"
            onClick={() => navigate("/projects")}
            className="relative text-[16px] flex justify-start items-center gap-2 text-accent-foreground hover:text-foreground hover:cursor-pointer underline-offset-4 underline px-0 py-0"
          >
            All Projects <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Section>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Section header="Blogs">
            <div className="flex flex-col gap-4">
              <p className="text-[16px] text-muted-foreground italic">
                Coming Soon
              </p>
              <Button
                variant="link"
                onClick={() => navigate("/blogs")}
                className="text-[16px] flex justify-start items-center gap-2 text-accent-foreground pt-8 hover:text-foreground hover:cursor-pointer underline-offset-4 underline px-0 py-0"
              >
                All Blogs <ArrowUpRight className="w-4 h-4" />
              </Button>
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
                I love creating{" "}
                <Highlight>simple and clean-looking websites</Highlight> that
                not only look great but also help people.{" "}
                <Highlight>
                  Aesthetics matter, but so does functionality!
                </Highlight>
              </Para>
              <Para>
                I'm always excited to try out{" "}
                <Highlight>new programming languages</Highlight> as they emerge
                on the internet.
              </Para>
              <Para>
                <Highlight>Music is a huge part of my life</Highlight> - I
                probably have my headphones on more than 50% of the time. Check
                out my{" "}
                <Link
                  to="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9"
                  className="text-primary hover:text-accent-foreground"
                >
                  Playlist
                </Link>
                .
              </Para>
              <Para>
                When I'm not coding or vibing to music, you will find me playing
                competitive shooters like <Highlight>Valorant</Highlight>,{" "}
                <Highlight>Marvel Rivals</Highlight>, or battling it out in
                platform fighters like <Highlight>Brawlhalla</Highlight>
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
                <Link
                  to="https://www.linkedin.com/in/naman-chawhan/"
                  className="text-primary hover:text-accent-foreground"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://github.com/namannc13"
                  className="text-primary hover:text-accent-foreground"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </Section>
        </InView>
      </div>
    </>
  );
}

export default Home;
