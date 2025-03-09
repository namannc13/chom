import { Clock } from "./components/clock";
import { ThemeProvider } from "./components/theme_provider";
import { ModeToggle } from "./components/mode_toggle";
import Section from "./components/section";
import Link from "./components/link";
import Highlight from "./components/highlight";
import Para from "./components/para";
import Heading from "./components/heading";
import Project from "./components/project";
import { projects } from "./data/projects";

function Navbar() {
  return (
    <header className="md:mx-10 lg:mx-36 xl:mx-76 py-8 flex justify-between">
      <div></div>
      <ModeToggle />
    </header>
  );
}

function TopSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Heading className="text-3xl font-semibold">Naman Chawhan</Heading>
        <div className="flex flex-col md:flex-row justify-between">
          <Heading className="text-muted-foreground ">
            Full Stack Developer
          </Heading>
          <Heading className="text-muted-foreground flex items-center gap-2">
            <i className="hgi hgi-stroke hgi-location-01"></i>
            Chandigarh, India
          </Heading>
        </div>
      </div>
      <Para>
        Full Stack Developer who loves turning coffee into elegant code
        solutions. I'm currently working as a{" "}
        <Highlight>Product Development Intern</Highlight> at{" "}
        <Link
          href="https://agnext.com/"
          className="underline underline-offset-4"
        >
          AgNext Technologies
        </Link>
      </Para>
    </div>
  );
}

function Footer() {
  return (
    <footer className="md:px-10 lg:px-36 xl:px-76 border-t border-border py-4 flex justify-between">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        Made with <i className="hgi hgi-stroke hgi-heart-remove"></i>  by Naman
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-muted-foreground">2025</p>
        <Clock />
      </div>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="md:mx-10 lg:mx-36 xl:mx-76 pb-8 ">
        <div className="flex flex-col gap-16">
          <TopSection />

          <Section header="Projects" className="gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  name={project.name}
                  link={project.link}
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

          <Section header="Blogs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground italic">
                  Coming Soon
                </p>
              </div>
            </div>
          </Section>

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
                <Link
                  href="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9"
                  className="underline underline-offset-4"
                >
                  Chom with me
                </Link>
              </Para>
            </div>
          </Section>

          <Section header="Connect">
            <div className="flex flex-col gap-4">
              <Para>
                I'm always looking for new opportunities to learn and grow. If
                you have any questions, please don't hesitate to{" "}
                <Highlight>reach out</Highlight>.
              </Para>
              <div className="flex gap-3 flex-wrap">
                <Link href="https://www.linkedin.com/in/naman-chawhan/">
                  LinkedIn
                </Link>
                <Link href="https://github.com/namannc13">GitHub</Link>
              </div>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
