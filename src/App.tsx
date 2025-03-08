import { Clock } from "./components/clock";
import { ThemeProvider } from "./components/theme_provider";
import { ModeToggle } from "./components/mode_toggle";
import { ArrowUpRight } from "lucide-react";

function App() {
  return (
    <ThemeProvider>
      <header className="md:mx-10 lg:mx-36 xl:mx-76 py-8 flex justify-between">
        <div></div>
        <ModeToggle />
      </header>
      <main className="md:mx-10 lg:mx-36 xl:mx-76 pb-8 ">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-md tracking-tight font-montserrat">
                Naman Chawhan
              </h4>
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground italic font-montserrat">
                  Full Stack Developer
                </p>
                <p className="text-sm text-muted-foreground italic font-montserrat">
                  Chandigarh, India
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Full Stack Developer who loves turning coffee into elegant code
              solutions. I'm currently working as a{" "}
              <span className="text-primary italic">
                Product Development Intern
              </span>{" "}
              at{" "}
              <a
                href="https://agnext.com/"
                className="relative text-sm italic text-accent-foreground underline underline-offset-4 hover:text-accent-foreground/70"
              >
                AgNext Technologies
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md tracking-tight italic font-montserrat">
              Projects
            </h4>
            <div className="grid grid-cols-1  ">
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/namannc13/daydrop"
                  className="relative text-sm italic text-accent-foreground underline underline-offset-4 hover:text-accent-foreground/70 w-fit"
                >
                  Daydrop
                </a>
                <p className="text-sm text-muted-foreground italic">
                  A Journaling App
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit font-montserrat hover:cursor-pointer">
                    Next.js
                  </div>
                  <div className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit font-montserrat hover:cursor-pointer">
                    TypeScript
                  </div>
                  <div className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit font-montserrat hover:cursor-pointer">
                    Tailwind
                  </div>
                  <div className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit font-montserrat hover:cursor-pointer">
                    PostgreSQL
                  </div>
                  <div className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit font-montserrat hover:cursor-pointer">
                    Drizzle
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md tracking-tight italic font-montserrat">
              Blogs
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground italic">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-md tracking-tight italic font-montserrat">
              Me
            </h4>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p className="text-sm leading-7">
                All I want to do is{" "}
                <span className="text-primary italic">build websites</span> that
                help people and that help me grow as a developer
              </p>
              <p className="text-sm leading-7">
                Currently, I'm focused on{" "}
                <span className="text-primary italic">
                  exploring modern web technologies
                </span>{" "}
                and{" "}
                <span className="text-primary italic">
                  trying out new Languages
                </span>
                . When I'm not coding, I'm reading about new developments in
                tech or{" "}
                <span className="text-primary italic">
                  contributing to open-source projects
                </span>
              </p>
              <p className="text-sm leading-7">
                <span className="text-primary italic">
                  I love listening to music
                </span>{" "}
                of all genres. I probably listen to music more than I should.
                Check out my Playlist{" "}
                <a
                  href="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9"
                  className="relative text-sm italic text-accent-foreground underline underline-offset-4 hover:text-accent-foreground/70 w-fit"
                >
                  Chom with me
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-md tracking-tight italic font-montserrat">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-7 text-muted-foreground">
                I'm always looking for new opportunities to learn and grow. If
                you have any questions, please don't hesitate to{" "}
                <span className="text-primary italic">reach out</span>.
              </p>
              <div className=" flex gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/naman-chawhan/"
                  className="relative rounded bg-muted text-accent-foreground px-[0.75rem] py-[0.2rem] text-sm font-semibold hover:bg-muted/70 w-fit italic"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/namannc13"
                  className="relative rounded bg-muted text-accent-foreground px-[0.75rem] py-[0.2rem] text-sm font-semibold hover:bg-muted/70 w-fit italic"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="md:px-10 lg:px-36 xl:px-76 border-t border-border py-4 flex justify-between">
        <p className="text-sm text-muted-foreground">2025</p>
        <Clock />
      </footer>
    </ThemeProvider>
  );
}

export default App;
