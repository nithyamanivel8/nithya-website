import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import portraitImage from "@/assets/nithya-portrait.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-muted/50 to-secondary/20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {t('hero.greeting')} <span className="inline-block animate-float">👋</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-muted-foreground font-light">
              {t('hero.tagline')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = 'mailto:nithyamanivel8@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('hero.connectBtn')}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-full px-8"
                onClick={() => window.open('https://linkedin.com/in/nithyamanivel', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                {t('hero.linkedinBtn')}
              </Button>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 justify-center md:justify-start mt-6 border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/10 rounded-full"
              onClick={() => window.location.href = 'tel:+310653340974'}
            >
              <Phone className="h-4 w-4" />
              <span>+31 0653340974</span>
            </Button>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src={portraitImage}
                alt="Nithya Manivel - HR & Talent Acquisition Specialist"
                className="relative rounded-full w-80 h-80 object-cover shadow-2xl ring-4 ring-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
