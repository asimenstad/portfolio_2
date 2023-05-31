import About from "../About/About.jsx";
import Cv from "../Cv/Cv.jsx";
import Contact from "../Contact/Contact.jsx";
import Intro from "../Intro/Intro.jsx";
import Projects from "../Projects/Projects.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";

function Main() {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Cv />
      <Contact />
      <ScrollToTop />
    </main>
  );
}

export default Main;
