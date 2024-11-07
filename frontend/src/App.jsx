import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import AnimatedCursor from "react-animated-cursor";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/404";
import ProjectDetails from "./Pages/ProjectDetails";


function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <AnimatedCursor
        outerStyle={{
          border: '3px solid var(--cursor-border-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        innerSize={
          window.innerWidth < 768
            ? 6
            : window.innerWidth < 1024
            ? 8
            : 12
        }
        outerSize={
          window.innerWidth < 768
            ? 20
            : window.innerWidth < 1024
            ? 30
            : 46
        }
        outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
        
        
        />
      </HelmetProvider>
    </>
  );
}

export default App;
