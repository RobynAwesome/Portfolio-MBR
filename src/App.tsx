import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfiniteScrollBar from "./components/InfiniteScrollBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import LinkedInSection from "./components/LinkedInSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteScrollBar />
      <About />
      <Skills />
      <Certificates />
      <LinkedInSection />
      <Contact />
      <Footer />
    </>
  );
}
