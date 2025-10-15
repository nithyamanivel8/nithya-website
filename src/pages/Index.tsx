import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import EUMarket from "@/components/EUMarket";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useTranslation } from "react-i18next";
const Index = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      
      <Testimonials />
      <Contact />
      
      <footer className="bg-muted/30 py-8 text-center text-muted-foreground">
        <p className="text-sm">
          {t('footer.copyright')}
        </p>
      </footer>
    </div>;
};
export default Index;