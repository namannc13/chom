import { Clock } from "./components/clock";

function App() {
  return (
    <>
      <main className="md:mx-10 lg:mx-36 xl:mx-76 pt-16 lg:pt-32 pb-8 ">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-md tracking-tight">Naman Chawhan</h4>
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground italic">
                  Full Stack Developer
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Chandigarh
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Full Stack Developer who loves turning coffee into elegant code
              solutions. I'm currently working as a Product Development Intern
              at{" "}
              <a
                href="https://agnext.com/"
                className="relative rounded bg-muted px-[0.75rem] py-[0.2rem] font-mono text-sm italic text-primary hover:bg-muted/70"
              >
                AgNext Technologies
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md tracking-tight italic">Projects</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/namannc13/daydrop"
                  className="relative rounded bg-muted px-[0.75rem] py-[0.2rem] italic text-sm font-semibold  hover:bg-muted/70 w-fit"
                >
                  Daydrop
                </a>
                <p className="text-sm text-muted-foreground italic">
                  A Journaling App
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md tracking-tight italic">Blogs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground italic">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-md tracking-tight italic">Me</h4>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p className="text-sm leading-7">
                All I want to do is build websites that help people and that
                help me grow as a developer
              </p>
              <p className="text-sm leading-7">
                Currently, I'm focused on exploring modern web technologies and
                trying out new Languages. When I'm not coding, I'm reading about
                new developments in tech or contributing to open-source projects
              </p>
              <p className="text-sm leading-7">
                I love listening to music of all genres. I probably listen to
                music more than I should{" "}
                <a
                  href="https://open.spotify.com/playlist/7aJTTUpRfBaptrgC37KpH9"
                  className="relative rounded bg-muted px-[0.75rem] py-[0.2rem] italic text-sm font-semibold text-primary hover:bg-muted/70 w-fit"
                >
                  Chom with me
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-md tracking-tight italic">Connect</h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-7 text-muted-foreground">
                I'm always looking for new opportunities to learn and grow. If
                you have any questions, please don't hesitate to reach out.
              </p>
              <div className=" flex gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/naman-chawhan/"
                  className="relative rounded bg-muted px-[0.75rem] py-[0.2rem] text-sm font-semibold hover:bg-muted/70 w-fit italic"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/namannc13"
                  className="relative rounded bg-muted px-[0.75rem] py-[0.2rem] text-sm font-semibold hover:bg-muted/70 w-fit italic"
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
    </>
  );
}

export default App;
