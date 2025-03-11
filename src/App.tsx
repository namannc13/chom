import { Clock } from "./components/clock";
import { ThemeProvider } from "./components/theme_provider";
import { ModeToggle } from "./components/mode_toggle";
import { InView } from "./components/ui/in_view";
import { motion } from "motion/react";
import ClickSpark from "./components/ui/click_spark";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { useNavigate } from "react-router-dom";
import Blogs from "./pages/blogs";

function Navbar() {
  const navigate = useNavigate();

  return (
    <motion.header
      className="md:mx-10 lg:mx-36 xl:mx-76 py-8 flex justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/")}
          className="relative text-16 text-primary hover:text-muted-foreground hover:cursor-pointer"
        >
          <span className="hidden lg:inline">[h]</span> home
        </button>
        <button
          onClick={() => navigate("/projects")}
          className="relative text-16 text-primary hover:text-muted-foreground hover:cursor-pointer"
        >
          <span className="hidden lg:inline">[p]</span> projects
        </button>
        <button
          onClick={() => navigate("/blogs")}
          className="relative text-16 text-primary hover:text-muted-foreground hover:cursor-pointer"
        >
          <span className="hidden lg:inline">[b]</span> blogs
        </button>
      </div>
      <ModeToggle />
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="md:px-10 lg:px-36 xl:px-76 border-t border-border py-4 flex justify-between">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        Made with <i className="hgi hgi-stroke hgi-heart-remove"></i> by Naman
      </p>
      <div className="flex gap-2 items-center text-muted-foreground">
        <p className="text-sm">2025</p>
        <Clock />
      </div>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ClickSpark
        sparkColor="#727D73"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <BrowserRouter>
          <Navbar />
          <main className="md:mx-10 lg:mx-36 xl:mx-76 pb-8 min-h-[calc(100svh-153px)] sm:min-h-[calc(100vh-153px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </main>
        </BrowserRouter>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Footer />
        </InView>
      </ClickSpark>
    </ThemeProvider>
  );
}

export default App;
