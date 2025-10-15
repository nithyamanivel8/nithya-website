import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t('contact.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t('contact.subtitle')}
        </p>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur border-0 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('contact.email')}</h3>
                  <a 
                    href="mailto:nithyamanivel8@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nithyamanivel8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h3>
                  <Button
                    variant="link"
                    className="text-muted-foreground hover:text-primary transition-colors p-0 h-auto font-normal"
                    onClick={() => window.location.href = 'tel:+310653340974'}
                  >
                    +31 0653340974
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('contact.location')}</h3>
                  <p className="text-muted-foreground">
                    {t('contact.locationCity')}
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    {t('contact.visa')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://linkedin.com/in/nithyamanivel', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                {t('contact.connectLinkedIn')}
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-full"
                onClick={() => window.location.href = 'mailto:nithyamanivel8@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('contact.sendEmail')}
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/10 rounded-full"
                onClick={() => window.open('https://wa.me/310653340974', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('contact.whatsapp')}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-accent/50 hover:border-accent hover:bg-accent/10 rounded-full"
                onClick={() => window.location.href = 'tel:+310653340974'}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('contact.callPhone')}
              </Button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground italic">
              "{t('contact.quote')}"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
