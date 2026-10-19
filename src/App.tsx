import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#menu">
        Preskočiť na menu
      </a>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
